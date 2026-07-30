import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import PropsDisplayer from "./components/PropsDisplayer.jsx";
import City from "./components/City.jsx";
import Address from "./components/Address.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Address street="123 Main St" suburb="Anytown" postcode="1234" />
  </StrictMode>,
);
