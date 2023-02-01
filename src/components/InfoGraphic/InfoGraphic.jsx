import "./InfoGraphic.css"
import Link from "../Link/Link";

const InfoGraphic = ({image, title, text}) => {
  return (
    <article className="infographic">
        <img src={image} alt="" className="image"/>
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
        <Link text="Read more" />
    </article>
  )
}

export default InfoGraphic