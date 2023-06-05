import React from "react";
import { createRoot } from "react-dom/client";
//import { Provider } from "react-redux";
//import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

// Decided to comment out the redux store and provider, as I felt
// it was not needed for this very simple feature, which state can
// be managed very easily on its own component. But if at any time
// we might needed, is still there.
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
