import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./page/Router";

import "./styles/global.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router />
    </StrictMode>
);
