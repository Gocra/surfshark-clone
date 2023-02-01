import "./NavbarDropdown.css"
import { ReactComponent as ChevronSVG } from "../../assets/chevron.svg";

const NavbarDropdown = ({dropdownData, show}) => {

    const cName = show ? "navbar-dropdown show" : "navbar-dropdown"

  return (
    <div className={cName}>
        <div className="content">
            {dropdownData.map(({title, data}, x) => {
                return (
                    <div className="dropdown-row" key={x}>
                        <h6 className="row-title">{title}</h6>
                        <div className="row-grid">
                            {data.map(({head, links}, i) => {
                                return (
                                    <div className="row-section" key={i}>
                                        <a href="#" className="heading">
                                            {head.icon ? <img src={head.icon} alt="" /> : null}
                                            <h6 className="section-title">
                                                <span>{head.title}</span>
                                                <ChevronSVG className="icon" />
                                            </h6>
                                            {head.info ? <p className="info">{head.info}</p> : null}
                                        </a>
                                        { links !== undefined ? 
                                            <div className="links">
                                                {links.map((link, j) => {
                                                    return (
                                                        <a href="" className="nav-dropdown-link" key={j}>{link}</a>
                                                    )
                                                })}
                                            </div>
                                        : null}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default NavbarDropdown