import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import DummyProvider from "./stores/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DummyProvider>
      <App />
    </DummyProvider>
  </StrictMode>
);
