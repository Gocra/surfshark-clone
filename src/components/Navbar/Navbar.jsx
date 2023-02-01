import "./Navbar.css";
import logo from "../../assets/logo.svg";
import hamburgerSVG from "../../assets/hamburger.svg";
import langSVG from "../../assets/lang.svg";
import {ReactComponent as SearchSVG} from "../../assets/search.svg";
import {ReactComponent as UserSVG} from "../../assets/user.svg";
import {ReactComponent as CaretSVG} from "../../assets/caret.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="content">
          <a href="#" className="logo-container"><img src={logo} alt="Surfshark Logo" /></a>
          <ul className="links">
            <li className="nav-link"><a href="#">Surfshark One</a></li>
            <li className="nav-link">
              <span>Products</span>
              <CaretSVG className="caret-icon"/>
            </li>
            <li className="nav-link"><a href="#">Pricing</a></li>
            <li className="nav-link"><a href="#">Download</a></li>
            <li className="nav-link">
              <span>Resources</span>
              <CaretSVG className="caret-icon"/>
            </li>
          </ul>
          <div className="user">
            <button className="search">
              <SearchSVG className="search-icon" />
              <span>Search</span>
            </button>
            <button className="change-lang">
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
    </nav>
  )
}

export default Navbar