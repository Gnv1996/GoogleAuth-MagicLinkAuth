import React from "react";
import Auth from "./auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="22471037744-6ifrobe8ab0ran4ve2hcf5jaqsaiu8i1.apps.googleusercontent.com">
      <Auth />
    </GoogleOAuthProvider>
  );
}
export default App;
