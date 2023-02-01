import "./Navbar.css";
import logo from "../../assets/logo.svg";
import hamburgerSVG from "../../assets/hamburger.svg";
import langSVG from "../../assets/lang.svg";
import {ReactComponent as SearchSVG} from "../../assets/search.svg";
import {ReactComponent as UserSVG} from "../../assets/user.svg";
import {ReactComponent as CaretSVG} from "../../assets/caret.svg";
import NavbarDropdown from "./NavbarDropdown";
import { productsDropdownData } from "./productsDropdownData";
import { resourcesDropdownData } from "./resourcesDropdownData";
import { useEffect, useRef, useState } from "react";
import LanguagePopout from "./LanguagePopout";

const Navbar = () => {

  const productsDropdownRef = useRef()
  const productsDropdownBtnRef = useRef()
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)

  const resourcesDropdownRef = useRef()
  const resourcesDropdownBtnRef = useRef()
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false)

  const languagePopoutRef = useRef()
  const languagePopoutBtnRef = useRef()
  const [showLanguagePopout, setShowLanguageshowLanguagePopout] = useState(false)

  useEffect(() => {
    function handleClickOutside(event) {
      if(languagePopoutBtnRef.current && languagePopoutBtnRef.current.contains(event.target)){
        setShowLanguageshowLanguagePopout(prev => !prev)
      }
      else if(languagePopoutRef.current && !languagePopoutRef.current.contains(event.target)){
        setShowLanguageshowLanguagePopout(false)
      }
      else if(languagePopoutBtnRef.current && !languagePopoutBtnRef.current.contains(event.target)){
        setShowLanguageshowLanguagePopout(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languagePopoutRef, languagePopoutBtnRef]);


  useEffect(() => {
    function handleClickOutside(event) {
      if(productsDropdownBtnRef.current && productsDropdownBtnRef.current.contains(event.target)){
        setShowProductsDropdown(prev => !prev)
      }
      else if(productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)){
        setShowProductsDropdown(false)
      }
      else if(productsDropdownBtnRef.current && !productsDropdownBtnRef.current.contains(event.target)){
        setShowResourcesDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productsDropdownRef, productsDropdownBtnRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if(resourcesDropdownBtnRef.current && resourcesDropdownBtnRef.current.contains(event.target)){
        setShowResourcesDropdown(prev => !prev)
      }
      else if(showResourcesDropdown.current && !showResourcesDropdown.current.contains(event.target)){
        setShowResourcesDropdown(false)
      }
      else if(resourcesDropdownBtnRef.current && !resourcesDropdownBtnRef.current.contains(event.target)){
        setShowResourcesDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showResourcesDropdown, resourcesDropdownBtnRef]);

  return (
    <nav className="navbar">
        <div ref={productsDropdownRef}>
              <NavbarDropdown show={showProductsDropdown} dropdownData={productsDropdownData} />
        </div>
        <div ref={resourcesDropdownRef}>
              <NavbarDropdown show={showResourcesDropdown} dropdownData={resourcesDropdownData} />
        </div>
        {/* <div > */}
            <LanguagePopout r={languagePopoutRef} show={showLanguagePopout} />
        {/* </div> */}
        <div className="wrapper">
          <div className="content">
            <a href="#" className="logo-container"><img src={logo} alt="Surfshark Logo" /></a>
            <ul className="links">
              <li className="nav-link"><a href="#">Surfshark One</a></li>
              <li className="nav-link" ref={productsDropdownBtnRef}>
                <span>Products</span>
                <CaretSVG className="caret-icon"/>
              </li>
              <li className="nav-link"><a href="#">Pricing</a></li>
              <li className="nav-link"><a href="#">Download</a></li>
              <li className="nav-link" ref={resourcesDropdownBtnRef}>
                <span>Resources</span>
                <CaretSVG className="caret-icon"/>
              </li>
            </ul>
            <div className="user">
              <button className="search">
                <SearchSVG className="search-icon" />
                <span>Search</span>
              </button>
              <button className="change-lang" ref={languagePopoutBtnRef}>
                <img className="lang-icon" src={langSVG} alt="" />
                <span>English</span>
                <CaretSVG className="caret-icon"/>
              </button>
              <a href="#" className="login">
                <span>Log in</span>
                <UserSVG className="user-icon" />
              </a>
              <a href="#" className="btn btn-sm btn-dark get-surfshark">Get Surfshark</a>
              <button className="hamburger">
                <img src={hamburgerSVG} alt="" />
              </button>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar