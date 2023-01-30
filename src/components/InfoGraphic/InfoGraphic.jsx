import "./InfoGraphic.css"

const InfoGraphic = ({image, title, text}) => {
  return (
    <article className="infographic">
        <img src={image} alt="" className="image"/>
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
        <a href="#" className="read-more">
          <span>Read more</span>
        </a>
    </article>
  )
}

export default InfoGraphic