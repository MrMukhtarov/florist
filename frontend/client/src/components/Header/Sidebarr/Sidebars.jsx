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
            <MenuItem routerLink={<Link to="/admin/sliderdetail" />}> Detail</MenuItem>
          </SubMenu>
          <SubMenu label="Category">
            <MenuItem routerLink={<Link to="/admin/addcategory" />}>
              {" "}
              Add
            </MenuItem>
            <MenuItem routerLink={<Link to="/admin/categorydetail" />}>Detail</MenuItem>
          </SubMenu>
          <SubMenu label="Arrivals">
            <MenuItem routerLink={<Link to="/admin/addarrivals" />}>
              {" "}
              Add
            </MenuItem>
            <MenuItem routerLink={<Link to="/admin/categorydetail" />}>Detail</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default Sidebars;
