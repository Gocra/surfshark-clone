import "./Link.css"
import {ReactComponent as ChevronSVG} from "../../assets/chevron.svg";

const Link = ({text}) => {
  return (
    <a href="#" className="link">
        <span>{text}</span>
        <ChevronSVG className="chevron-svg"/>
    </a>
  )
}

export default Link