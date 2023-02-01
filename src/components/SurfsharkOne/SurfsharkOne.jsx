import "./SurfsharkOne.css"
import homeOneImg from "../../assets/home-one.png";
import vpnLogo from "../../assets/vpn-logo.svg"
import vpnImg from "../../assets/vpn.png"
import Link from "../Link/Link"
import antivirusImg from "../../assets/antivirus.png"
import antivirusWhiteLogoSVG from "../../assets/antivirus-white.svg"
import searchLogoSVG from "../../assets/search-logo.svg";
import searchBrowserImg from "../../assets/searchBrowser.png"
import alertSVG from "../../assets/alert-white.svg";
import alertImg from "../../assets/alert.png"
import InfoCard from "../InfoCard/InfoCard";

import antivirusLogo from "../../assets/antivirus-logo.png";
import alertLogo from "../../assets/alert-logo.png";
import searchLogo from "../../assets/search-icon.png";
import shieldLogo from "../../assets/shield-icon.png";

import tickIconSVG from "../../assets/white-tick.svg";

const Title = () => {
 return <>
    <h1 className="title emphasised-text">Surfshark One</h1>
    <img className="home-one-img" src={homeOneImg} alt="" />
    </>
}

const C2A = () => {
    return (
        <div className="c2a">
            <h2 className="heading">Embrace your full security potential</h2>
            <div className="content">
                <p className="text">One package - four tools to protect yourself. From your devices to online presence - Surfshark One covers it all.</p>
                <a href="#" className="btn btn-light btn-md get-surfshark-one">Get Surfshark One</a>
            </div>
        </div>
    )
}

const OneVPN = () => {
    return (
        <div className="one-vpn">
            <div className="content">
                <img className="vpn-logo" src={vpnLogo} alt="" />
                <h2 className="text">Protect your privacy with <span className="emphasised-text">the fastest VPN</span></h2>
                <Link text="Discover" />
            </div>
            <img className="vpn-img" src={vpnImg} alt="" />
        </div>
    )
}

const Antivirus = () => {
    return (
        <div className="antivirus dark">
            <img src={antivirusImg} alt="" />
            <div className="content">
                <img className="antivirus-logo" src={antivirusWhiteLogoSVG} alt="" />
                <p className="text">
                    <span className="emphasised-text">Secure your devices</span>
                    from viruses & malware
                </p>
                <Link text={"Discover"} />
            </div>
        </div>
    )
}

const Search = () => {
    return (
        <div className="search">
            <div className="content">
                <img className="logo" src={searchLogoSVG} alt="" />
                <h1 className="heading">
                    <span className="emphasised-text">Search without being</span>tracked & ad-free
                </h1>
            </div>
            <img src={searchBrowserImg} alt="" />
        </div>
    )
}

const OneAlert = () => {
    return (
        <div className="dark one-alert">
            <div className="content">
                <div className="wrapper">
                    <div className="flex">
                        <img className="logo" src={alertSVG} alt="" />
                        <h1 className="heading">
                            <span className="emphasised-text">Safeguard your accounts</span>from data breaches
                        </h1>
                        <Link text={"Discover"} />
                    </div>
                </div>
            </div>
            <img className="alert-img" src={alertImg} alt="" />
        </div>
    )
}

const surfsharkOneInfoCardData = {
    duration:"24 months",
    currency:"GBP",
    amount:"3.21",
    date:"/mo",
    save:"Save 81%",
    billInfo:"Billed 77.02 now, & annually after the first 24 month. Additional taxes may apply depending on your jurisdiction.",
    linkText:"Get Surfshark One"
}

const onePlanIncludes = [
    {
        icon: shieldLogo,
        title: "VPN",
        benefits : [
            "Change digital locations",
            "Protect data and privacy"
        ]
    },
    {
        icon: antivirusLogo,
        title: "Antivirus",
        benefits : [
            "Scan for viruses",
            "Remove harmful files"
        ]
    },
    {
        icon: searchLogo,
        title: "Search",
        benefits : [
            "Hide from search engines",
            "Get truly organic results"
        ]
    },
    {
        icon: alertLogo,
        title: "Alert",
        benefits : [
            "Check for data breaches",
            "Get real-time alerts"
        ]
    },
]

const OnePlanC2A = () => {
    return (
        <div className="dark one-plan-c2a">
            <div className="content">
                <div className="benefits">
                    <div className="heading">Included in Surfshark One:</div>
                    <div className="heading">Surfshark One includes:</div>
                    <div className="benefits-grid">
                        {onePlanIncludes.map(({icon, title, benefits}, i) => {
                            return (
                                <div className="benefit" key={i}>
                                    <div className="head">
                                        <div className="icon-container">
                                            <img className="icon" src={icon} alt="" />
                                        </div>
                                        <h3 className="benefit-heading">{title}</h3>
                                    </div>
                                    {benefits.map((benefit, j) => {
                                        return (
                                            <div className="benefit-item">
                                                <img className="tick-icon" src={tickIconSVG} alt="" />
                                                <span>{benefit}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <InfoCard {...surfsharkOneInfoCardData} />
            </div>
        </div>
    )
}

const SurfsharkOne = () => {
  return (
    <section className="surfsharkone">
        <Title />
        <C2A />
        <OneVPN />
        <Antivirus />
        <Search />
        <OneAlert />
        <OnePlanC2A />
    </section>
  )
}

export default SurfsharkOne