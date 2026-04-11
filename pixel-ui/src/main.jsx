import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ToastProvider } from "./components/Toast/ToastContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider position="top-right" duration={4000}>
      <App />
    </ToastProvider>
  </StrictMode>,
);
