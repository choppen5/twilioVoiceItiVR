twilioVoiceItiVR
================

A sample Twilio IVR that does demonstrates voice biometric authentication by using the VoiceIT API

#Pre-Requisites
- Twilio Account + phone numbers
- VoiceIt account, DeveloperId and Password http://www.voiceit-tech.com/
- Set Environment Variables:
-- VOICEIT_PASSWORD
-- VOICEIT_DEV_ID


#Install:

npm install


## Configure

1. Set the environment variable VOICEIT_PASSWORD, VOICEIT_DEV_ID
2. node server.js 
(to run, or deploy to a server)
3. Point a Twilio Phone number to VoiceURL to your node app from step2 

## Deploy to Heroku
