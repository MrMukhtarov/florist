import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./SideBars.css";

const Sidebars = () => {
  return (
    <>
      <div className="sidebartitle">Admin Panel</div>
      <Sidebar>
        <Menu>
          <SubMenu label="Logo">
            <MenuItem routerLink={<Link to="/admin/logodetail" />}>
              {" "}
              Detail
            </MenuItem>
          </SubMenu>
          <SubMenu label="Slider">
            <MenuItem routerLink={<Link to="/admin/addslider" />}>
              {" "}
              Add
            </MenuItem>
            <MenuItem routerLink={<Link to="/calendar" />}> Calendar</MenuItem>
            <MenuItem routerLink={<Link to="/e-commerce" />}>
              {" "}
              E-commerce
            </MenuItem>
          </SubMenu>
          <SubMenu label="Instagram">
            <MenuItem routerLink={<Link to="/documentation" />}>
              {" "}
              Documentation
            </MenuItem>
            <MenuItem routerLink={<Link to="/calendar" />}> Calendar</MenuItem>
            <MenuItem routerLink={<Link to="/e-commerce" />}>
              {" "}
              E-commerce
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default Sidebars;
