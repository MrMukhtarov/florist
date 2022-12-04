import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";
import { SliderContextProvider } from "./components/Context/SliderContext";
import { LogoContextProvider } from "./components/Context/LogoContext";
import { CategoryContext } from "./components/Context/CategoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LogoContextProvider>
      <ProSidebarProvider>
        <SliderContextProvider>
          <CategoryContext>
            <App />
          </CategoryContext>
        </SliderContextProvider>
      </ProSidebarProvider>
    </LogoContextProvider>
  </React.StrictMode>
);
