import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App.jsx";
import "./App.css";


createRoot(document.getElementById("root")).render(

	// <Auth0Provider
  //   domain="dev-m5tqeuskh8pty2ob.us.auth0.com"
  //   clientId="llP4uquQSmW0hrIqPC60WKTH1jWw903n"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >

  // toast.configure();

  
   	
		<BrowserRouter>
			<App />
		</BrowserRouter>

		// </Auth0Provider>,
	
);
