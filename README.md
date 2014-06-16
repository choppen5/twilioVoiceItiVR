# twilioVoiceItiVR

A sample Twilio IVR that does demonstrates voice biometric authentication by
using the VoiceIT API.

## Pre-Requisites

- Twilio Account
-- [Twilio Developer Registration](https://www.twilio.com/try-twilio)
- VoiceIt Account
-- [VoiceIt Developer Registration](https://siv.voiceprintportal.com/sivservice/developerlogin.html)

## Install:

npm install

## Configure

1. Set the environment variable `VOICEIT_PASSWORD` and `VOICEIT_DEV_ID` to your
   VoiceIt developer account credentials.
2. `node src/server.js`
3. Point a Twilio Phone number to VoiceURL to your `http://node-app-from-step2/incoming_call`

## Deploy to Heroku

    $ heroku create
    $ git push heroku master
    $ heroku config:set VOICEIT_PASSWORD=foo VOICEIT_DEV_ID=12345

Point a Twilio Phone number to VoiceURL to your `http://my.herokuapp.com/incoming_call`
