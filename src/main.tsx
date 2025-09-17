import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HolyGrail from "./HolyGrail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HolyGrail />
  </StrictMode>
);
