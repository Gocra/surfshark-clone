import "./Navbar.css";
import logo from "../../assets/logo.svg";
import hamburgerSVG from "../../assets/hamburger.svg";
import langSVG from "../../assets/lang.svg";
import searchSVG from "../../assets/search.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="content">
          <a href="" className="logo-container"><img src={logo} alt="Surfshark Logo" /></a>
          <div className="user">
            <button className="search">
              <img src={searchSVG} alt="" />
            </button>
            <button className="change-lang">
              <img src={langSVG} alt="" />
            </button>
            <a href="" className="login">Log in</a>
            <a href="" className="btn btn-sm btn-dark get-surfshark">Get Surfshark</a>
            <button className="hamburger">
              <img src={hamburgerSVG} alt="" />
            </button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar