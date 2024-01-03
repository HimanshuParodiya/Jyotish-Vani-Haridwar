import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "/assets/JyotishVaniHaridwar_logo.png";
import { LuUserCircle2 } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import OverlayMenu from "./OverlayMenu";
import { SiGoogletranslate } from "react-icons/si";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDevice, setMobileDevice] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileDevice(window.innerWidth > 600);
    };

    // Set initial state on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setShowOverlay(false);
  };

  const handleOpenMenu = () => {
    setMenuOpen(true);
    setShowOverlay(true);
  };
  return (
    <header className="header__container container">
      <div className="header_left">
        <div className="header_logo">
          <img src={logo} alt="Jyotish Vani Haridwar logo" />
        </div>
        <div className="headerLogo_text">
          <div className="headerLogo_name">JyotishVaniHaridwar</div>
          {/* <div className="headerLogo_subtitle">Haridwar Jyotish Portal</div> */}
          <div className="headerLogo_subtitle">ज्योतिष दीप्ति हरिद्वार:</div>
        </div>
      </div>
      <div className="headerRight_searchBar">
        <form>
          <label htmlFor="searchIcon">
            <BiSearch className="headerRight_searchBarIcon" />
          </label>
          <input
            type="text"
            name="searchIcon"
            id="searchIcon"
            placeholder="Search here"
          />
        </form>
      </div>
      <div className="header_right">
        <div className="headerRight_language">
          {mobileDevice ? (
            <select id="language_Selection">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
            </select>
          ) : (
            <SiGoogletranslate className="googleTranslateIcon" />
          )}
        </div>
        <div className="headerRight_signUpIconText">
          <LuUserCircle2 className="headerRight_signUpIcon" />
          <span className="headerRight_signUpText">Sign Up</span>
        </div>

        <div className="headerRight_hamburger">
          {menuOpen ? (
            <MdClose onClick={handleCloseMenu} className="hamburger_icon" />
          ) : (
            <GiHamburgerMenu
              onClick={handleOpenMenu}
              className="hamburger_icon"
            />
          )}
        </div>
        {showOverlay && (
          <div className="overlay_menu">
            <OverlayMenu />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
