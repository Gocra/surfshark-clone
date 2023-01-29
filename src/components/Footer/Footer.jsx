import "./Footer.css"
import { platformArray } from "./platformArray"
import { linksArray } from "./linksArray"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="link-grid">
            {linksArray.map(({title, links}, i)=>{
                return <>
                    <div className="link-section" key={i}>
                        <h6 className="title">{title}</h6>
                        <div className="links">
                            {links.map((link, j) => {
                                return <a href="" className="link" key={j}>{link}</a>
                            })}
                        </div>
                    </div>
                </>
            })}
        </div>
        <div className="platform-grid">
            {platformArray.map(({logo, name}, i) => {
                return <a href="" className="platform" key={i}>
                    <img src={logo} alt="" className="logo" />
                    <span className="name">{name}</span>
                </a>
            })}
        </div>
        <div className="copyright">
            <div className="content">
                <p>2023 Copyright Surfshark. All rights reserved.</p>
                <p>Surfshark B.V., KvK number: 81967985, address: Kabelweg 57, 1014BA Amsterdam, the Netherlands, VAT number NL862287339B01</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer