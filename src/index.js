import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("HAVE TO WRITE here")
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App /> 
    </StrictMode>
)