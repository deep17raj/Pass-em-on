from flask import Flask, session, redirect, abort, request
import mysql.connector
import os, pathlib, requests, google.auth.transport.requests, mysql.connector, db_cred
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1" #https override for google oauth

app = Flask("PassEmOn")
app.secret_key = "secret"

IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image'
CLIENT_ID = 'de0ac7ad6efd1aa'

GOOGLE_CLIENT_ID = "436039800268-su7b5libe8shn70vuv19co49glgdvmog.apps.googleusercontent.com"
client_secrets_file = os.path.join(pathlib.Path(__file__).parent, "client_secret.json") #get the path to the client secret file
flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file, 
    scopes= ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email", "openid"],
    redirect_uri = "http://localhost:5000/callback")


@app.route("/login")
def login():
    authorizatioin_url, state = flow.authorization_url(hd="vitstudent.ac.in") #state for security , hd = hosted domain
    session["state"] = state
    return redirect(authorizatioin_url)

@app.route("/callback")
def callback():
    flow.fetch_token(authorization_response=request.url)

    if not (session["state"] == request.args["state"]):
        abort(500) #state differ

    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(session=cached_session)

    id_info = id_token.verify_oauth2_token(id_token=credentials._id_token, request=token_request, audience=GOOGLE_CLIENT_ID)
    
    session["google_id"] = id_info.get("sub")
    session["name"] = id_info.get("name")
    return {"logged_in": 1, 
            "google_id": session["google_id"], 
            "name": session["name"],
            "gmail_id": id_info.get("email")
            }

@app.route('/upload', methods=['POST'])
def upload_image():
    uid = ""
    course = request.form['course_code']
    slot = request.form['slot']
    image = request.files['image']
    files = {'image': image.read()}
    headers = {'Authorization': 'Client-ID {}'.format(CLIENT_ID)}
    
    response = requests.post(IMGUR_UPLOAD_URL, headers=headers, files=files)
    
    if response.status_code == 200:
        data = response.json()
        link = data["data"]["link"]
        mydb = mysql.connector.connect(host=db_cred.cred["host"], user=db_cred.cred["un"], password=db_cred.cred["pwd"], database=db_cred.cred["db"])
        cursor = mydb.cursor()
        query = "INSERT INTO NOTES VALUES {}, {}, {}, {}".format(uid, course, slot, link)
        cursor.execute(query)
        mydb.close()
        return {data}
    else:
        return {data}

@app.route("/search_page")
def search_page():
    search = request.args.get("q")
    query = "SELECT * FROM NOTES WHERE course_code={}".format(search)
    mydb = mysql.connector.connect(host=db_cred.cred["host"], user=db_cred.cred["un"], password=db_cred.cred["pwd"], database=db_cred.cred["db"])
    cursor = mydb.cursor()
    cursor.execute(query)
    mydb.close()
    return ""