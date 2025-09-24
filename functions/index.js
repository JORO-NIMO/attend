const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.markAttendance = functions.https.onCall(async (data, context) => {
  // data = { userId, location }
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "User must be authenticated");
  }

  const { userId, location } = data;
  const timestamp = admin.firestore.FieldValue.serverTimestamp();

  await admin.firestore().collection("attendance").add({
    userId,
    location,
    timestamp
  });

  return { success: true };
});