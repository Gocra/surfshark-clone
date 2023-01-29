import "./Hero.css"
import heroBGImgXs from "../../assets/winter-deal-bg-xs.svg"
import heroBGImg from "../../assets/winter-deal-bg.svg"
import heroImg from "../../assets/winter-deal-punk.svg"

const Hero = () => {
  return (
    <section className="hero">
        <img src={heroBGImg} alt="" />
        <img src={heroImg} alt="" />
        <div className="hero-deal">
            <h1>82% off</h1>
            <p>+2 mo. FREE</p>
            <p>One VPN deal to rock them all</p>
            <a href="" className="btn btn-md btn-light">Get VPN Deal</a>
        </div>
    </section>
  )
}

export default Hero