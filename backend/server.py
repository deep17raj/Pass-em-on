from flask import Flask, session, redirect, abort, request
import os, pathlib, requests, google.auth.transport.requests
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1" #https override for google oauth

app = Flask("PassEmOn")
app.secret_key = "secret"

google_client_id = "436039800268-su7b5libe8shn70vuv19co49glgdvmog.apps.googleusercontent.com"
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

    id_info = id_token.verify_oauth2_token(id_token=credentials._id_token, request=token_request, audience=google_client_id)
    
    session["google_id"] = id_info.get("sub")
    session["name"] = id_info.get("name")
    return {"logged_in": 1, 
            "google_id": session["google_id"], 
            "name": session["name"],
            }