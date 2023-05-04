import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";


export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  function handel_submit(e) {
    e.preventDefault();
  }

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  return (
    <div className="row">
      <form className="mx-auto col-6 pt-5">
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label class="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="button" class="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div class="text-center">
          <p>Not a Bark Pal? </p>
          <span>
            <Link to="/Signup">
              <a href="#!">Sign Up!</a>
            </Link>
            {/* <div class="g-signin2 text-white" data-onsuccess={onSignIn}>test</div> */}
            <GoogleOAuthProvider clientId="188012050470-nihj1ucjec12h06u1qf624j7secgceha.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  navigate("/playdate");
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </span>
        </div>
      </form>
    </div>
  );
};

// here is the code for the google api login

//  <script src="https://apis.google.com/js/platform.js" async defer></script>
// <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">

/* /* sign in button here */

/* The onSignIn function to handle the sign-in response, and get user google profile info */
