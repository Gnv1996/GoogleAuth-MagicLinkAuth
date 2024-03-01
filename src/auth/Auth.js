import React, { useState } from "react";
import { Magic } from "magic-sdk";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const magic = new Magic("pk_live_BA9BA6F7E44F7B50");

function Auth() {
  const [email, setEmail] = useState("");
  const [googleToken, setGoogleToken] = useState("");
  console.log(googleToken, "token");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await magic.auth.loginWithEmailOTP({ email });
      console.log("Magic Link sent to email:", email);
    } catch (error) {
      console.error("Error logging in with Magic:", error);
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();
    googleLogout();
    setGoogleToken("");
    alert("Logout Successfully");
  };

  return (
    <div className="container card mt-5 ">
      <h5 className="text-center">
        React Login With Magic Link && Google Auth[0]
      </h5>
      <h1 className="border-bottom border-primary text-center py-4">Login</h1>
      <form onSubmit={formSubmitHandler}>
        <div className="form-group py-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary form-control" type="submit">
          Submit
        </button>
        <div className=" row py-3 px-5 text-center">
          <div className="col-md-6">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const token = credentialResponse.credential;
                setGoogleToken(token);
                const credentialResponseDecode = jwtDecode(token);
                console.log(credentialResponseDecode, "response------>---");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger form-control"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Auth;
