# Proximity Attendance App

Firebase-powered web app for marking attendance based on physical proximity.

## Stack

- Firebase Hosting & Functions
- React (frontend)
- Google Authentication

## Getting Started

1. Clone this repo.
2. Install Firebase CLI globally: `npm i -g firebase-tools`
3. Run `npm install` in the root, `functions/`, and `web/` folders.
4. Set your Firebase project credentials in `web/src/firebase.js`.
5. Start frontend: `npm run start` (from root or `cd web && npm start`)
6. Deploy: `firebase deploy`

## Features

- Google Auth login
- Mark attendance with location info
- Secure, serverless backend
