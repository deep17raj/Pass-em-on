from flask import Flask, session, redirect, abort, request, jsonify
from flask_cors import CORS  # ✅ Import CORS
import mysql.connector
import os, pathlib, requests, google.auth.transport.requests
import db_cred
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol

app = Flask("PassEmOn")
app.secret_key = "secret"

# ✅ Enable CORS for all routes
CORS(app)  # This allows all domains to access Flask APIs

IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image'
CLIENT_ID = 'de0ac7ad6efd1aa'
GOOGLE_CLIENT_ID = "436039800268-su7b5libe8shn70vuv19co49glgdvmog.apps.googleusercontent.com"

# Fix path issue
client_secrets_file = os.path.join(pathlib.Path(__file__).parent, "client_secret.json")

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=["https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email", "openid"],
    redirect_uri="http://localhost:5000/callback"
)

@app.route('/upload', methods=['POST'])
def upload_image():
    course = request.form['course_code']
    slot = request.form['slot']
    image = request.files['image']

    files = {'image': image.read()}
    headers = {'Authorization': f'Client-ID {CLIENT_ID}'}

    response = requests.post(IMGUR_UPLOAD_URL, headers=headers, files=files)

    if response.status_code == 200:
        data = response.json()
        link = data["data"]["link"]

        mydb = mysql.connector.connect(
            host=db_cred.cred["host"],
            user=db_cred.cred["un"],
            password=db_cred.cred["pwd"],
            database=db_cred.cred["db"]
        )
        cursor = mydb.cursor()

        query = "INSERT INTO NOTES (course_code, slot, img_link) VALUES (%s, %s, %s)"
        cursor.execute(query, (course, slot, link))
        mydb.commit()
        mydb.close()

        return jsonify({"success": True, "image_url": link})

    else:
        return jsonify({"success": False, "error": "Failed to upload to Imgur"}), 500


if __name__ == "__main__":
    app.run(debug=True)