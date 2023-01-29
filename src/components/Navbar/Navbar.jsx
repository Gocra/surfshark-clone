import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="content">
            <a href=""><img src={logo} alt="Surfshark Logo" /></a>
            <a href="" className="btn btn-sm btn-dark">Get VPN Deal</a>
        </div>
    </nav>
  )
}

export default Navbar