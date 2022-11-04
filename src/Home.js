import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "./Base";
import { signOut } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
function Home() {
  const { currentUser } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUserName(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [currentUser]);

  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
    }
    navigate("/login");
  };

  const clickSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="mainContainer">
      <h1>Home</h1>
      {currentUser && <p>Welcome, {userName}</p>}
      <div className="buttons">
        <button onClick={clickLogin}>
          {currentUser ? "Log Out" : "Login"}
        </button>
        {!currentUser && <button onClick={clickSignup}>Sign Up</button>}
      </div>
    </div>
  );
}

export default Home;
