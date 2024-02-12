import "react-app-polyfill/stable";
import "core-js";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import "./variables.scss";
import "./theme.scss";
import { store } from "./store/store";

const container = document.getElementById("root");

container
  ? createRoot(container).render(
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    )
  : null;
