import "./Hero.css"
import phoneSVG from "../../assets/home-hero-phone.svg";
import { infoGraphicData } from "./infoGraphicData";
import InfoGraphic from "../InfoGraphic/InfoGraphic";
import PCMAGLogoSVG from "../../assets/logo-pcmag.svg"
import {ReactComponent as ChevronSVG} from "../../assets/chevron.svg";
import InfoCard from "../InfoCard/InfoCard";
import { planDetails } from "./planDetails";

const HeroLanding = () => {
  return (
    <div className="top">
      <div className="text-container">
        <div className="hero-text">
          <p className="deal">30-day money-back guarantee</p>
          <h1 className="title">Secure your digital life</h1>
          <a href="#" className="btn btn-md btn-light">Get Surfshark VPN</a>
        </div>
      </div>
      <img src={phoneSVG} alt="" className="phone-image" />
    </div>
  )
}

const About = () => {
  return (
  <div className="about">
    <div className="infographic-grid">
      {infoGraphicData.map((info, i) => {
        return <InfoGraphic key={i} {...info} />
      })}
    </div>
    <a href="#" className="btn btn-transparent">View all benefits of Surfshark</a>
  </div>
  )
}

const plansInfoCardData = {
  duration:"24 months",
  currency:"GBP",
  amount:"2.01",
  date:"/mo",
  save:"Save 81%",
  billInfo:"Billed 48.34 now, & annually after the first 24 month. Additional taxes may apply depending on your jurisdiction.",
  linkText:"Get Surfshark VPN"
}

const Plans = () => {
  return (
    <div className="plans">
      <div className="details">
        <h2 className="title">Plan includes:</h2>
        <div className="plan-detail-grid">
          {planDetails.map(({detail, icon}, i) => {
            return <div className="detail" key={i}>
              <div className="icon-container">
                <img src={icon} className="icon" alt="" />
              </div>
              <p className="text">{detail}</p>
              </div>
          })}
        </div>
      </div>
      <InfoCard {...plansInfoCardData}/>
    </div>
  )
}

const QuoteSlider = () => {
  return <div className="quote-slider">
    <div className="highlighted-text">Trusted by experts</div>
    <div className="quote">
    “Surfshark proves its worth with a large collection of privacy tools, an excellent app, and unlimited device connections.”
    </div>
    <div className="slider-controls">
      <button className="btn arrow-btn">
        <ChevronSVG className="left arrow-svg" />
      </button>
      <div className="logo-container">
        <img src={PCMAGLogoSVG} className="logo" alt="" />
      </div>
      <button className="btn right arrow-btn">
        <ChevronSVG className="right arrow-svg" />
      </button>
    </div>
  </div>
}

const Hero = () => {
  return (
    <section className="hero">
        <HeroLanding/>
        <About/>
        <Plans />
        <QuoteSlider />
    </section>
  )
}

export default Hero