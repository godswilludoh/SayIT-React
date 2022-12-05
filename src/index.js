import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/custom.scss";
import { AuthProvider } from "./helper/context/AuthContext";
import { AgentReportProvider } from "./helper/context/agent-context/AgentReportState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AgentReportProvider>
            <App />
          </AgentReportProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
