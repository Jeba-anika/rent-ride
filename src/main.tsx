import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import router from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </PersistGate>
    </ParallaxProvider>
  </React.StrictMode>
);
