import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

const Googleauth = () => {
  return (
    <div className="googleContainer">
      <p className="text-center">ou</p>
      <GoogleOAuthProvider clientId="google client id">
        <GoogleLogin
          onSuccess={(credentialResponse) => {}}
          theme="filled_blue"
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Googleauth;
