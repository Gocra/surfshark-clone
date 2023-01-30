import "./Hero.css"
import phoneSVG from "../../assets/home-hero-phone.svg";
import { infoGraphicData } from "./infoGraphicData";
import InfoGraphic from "../InfoGraphic/InfoGraphic";

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

const planDetails = [
  {detail: "Unlimited devices"},
  {detail: "No Logs Policy"},
  {detail: "All advanced security features"},
  {detail: "High-speed content delivery"},
  {detail: "30-day money-back guarantee"},
  {detail: "24/7 customer support"},
]

const Plans = () => {
  return (
    <div className="plans">
      <div className="details">
        <h2 className="title">Plan includes:</h2>
        <div className="plan-detail-grid">
          {planDetails.map(({detail}, i) => {
            return <div className="detail" key={i}><p className="text">{detail}</p></div>
          })}
        </div>
      </div>
      <a href="#" className="plan-price">
        <div className="time">24 months</div>
        <div className="price">
          <span className="currency">GBP</span>
          <span className="amount">2.01</span>
          <span className="date">/mo</span>
        </div>
        <div className="save">Save 81%</div>
        <p className="bill-info">
          Billed 48.34 now, & annually after the first 24 month. Additional taxes may apply depending on your jurisdiction.
        </p>
        <button className="btn btn-md btn-light">Get Surfshark VPN</button>
      </a>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="hero">
        <HeroLanding/>
        <About/>
        <Plans />
    </section>
  )
}

export default Hero