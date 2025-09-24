import React, { useState } from "react";
import { auth, functions, httpsCallable } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const markAttendance = async () => {
    setStatus("Marking attendance...");
    const markAttendanceFn = httpsCallable(functions, "markAttendance");
    await markAttendanceFn({
      userId: user.uid,
      location
    });
    setStatus("Attendance marked!");
  };

  return (
    <div>
      <h1>Proximity Attendance App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <input
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <button onClick={markAttendance}>Mark Attendance</button>
          <div>{status}</div>
        </div>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  );
}

export default App;