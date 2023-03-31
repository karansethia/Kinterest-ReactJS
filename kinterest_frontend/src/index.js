import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <GoogleOAuthProvider clientId="1060149641602-lknsljv4h4a6shvbmvjl8fbhp7hccpon.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>;
    </Router>
  </React.StrictMode>
);