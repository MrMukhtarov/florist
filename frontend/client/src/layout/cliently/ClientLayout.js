import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;