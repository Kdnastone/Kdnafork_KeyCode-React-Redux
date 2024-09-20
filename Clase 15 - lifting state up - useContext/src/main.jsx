import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);