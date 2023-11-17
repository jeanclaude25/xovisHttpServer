Installation:

After having a system ready with node.js
you need to create an .env file
file that looks like this:
XOVIS_DATAPUSH_USERNAME = username
XOVIS_DATAPUSH_PASSWORD = pass


APP_apiKey = sdjhgbfjglkbfgdkb
APP_authDomain = kdjnfglkn.firebase.com
APP_projectId = project.co
APP_storageBucket = medsdfo
APP_messagingSenderId = 6516512
APP_appId = 516513213ywebsdf651
APP_measurementId = G-SUDKJFJDB

Then run npm i to install the dependencies

and node index.js to launch your server

On the xovis side, go to data push options and create a new http datapush agent, then set up basic authentication with the same username and password as in your .env file.
