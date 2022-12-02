import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLogo } from "../Context/LogoContext";

const Header = () => {
  const { logo } = useLogo();

  return (
    <header className="p-4">
      <div className="container">
        <div className="row all">
          <div className="headerLeft col-lg-2 col-6">
            {logo &&
              logo.map((logo) => (
                <NavLink key={logo._id} to="/">
                  <img src={logo.img} alt="logo" className="img-fluid" />
                </NavLink>
              ))}
          </div>
          <div className="headerRight col-lg-10 col-6">
            <div className="headerRights col-lg-12 row">
              <div className="headerRight-left col-lg-9 text-center">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/">ABOUT</NavLink>
                <NavLink to="/">SERVICES</NavLink>
                <NavLink to="/">SHOP</NavLink>
                <NavLink to="/">PAGES</NavLink>
                <NavLink to="/">BLOG</NavLink>
                <NavLink to="/">CONTACT</NavLink>
              </div>
              <div className="headerRight-right col-lg-3 text-end">
                <NavLink className="bssearch" to="/">
                  <BsSearch />
                </NavLink>
                <NavLink className="bsheart" to="/">
                  <BsHeart />
                </NavLink>
                <NavLink className="bshandbag" to="/">
                  <BsHandbag />
                </NavLink>
                <NavLink className="burger" to="/">
                  <GiHamburgerMenu />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
