import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { PrimerComponente } from "./componentes/primerComponente";
// import { Contador } from "./componentes/hocks";
import { CondicionalTernarios } from "./componentes/condicionalTernarios";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CondicionalTernarios />
  </StrictMode>
);
