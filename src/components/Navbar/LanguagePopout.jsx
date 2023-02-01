import "./LanguagePopout.css"

const LanguagePopout = ({show, r}) => {
    const cName = show ? "language-popout show" : "language-popout"

  return (
    <div className={cName} ref={r}>
        <h6 className="heading">CHANGE YOUR LANGUAGE</h6>
        <ul className="languages">
            <li><a className="language" href="">Deutsch</a></li>
            <li><a className="language" href="">English</a></li>
            <li><a className="language" href="">Español</a></li>
            <li><a className="language" href="">Français</a></li>
            <li><a className="language" href="">Italiano</a></li>
            <li><a className="language" href="">Nederlands</a></li>
            <li><a className="language" href="">Polski</a></li>
            <li><a className="language" href="">Português</a></li>
            <li><a className="language" href="">Suomi</a></li>
            <li><a className="language" href="">Türkçe</a></li>
            <li><a className="language" href="">Русский</a></li>
            <li><a className="language" href="">Українська</a></li>
            <li><a className="language" href="">한국어</a></li>
            <li><a className="language" href="">简体中文</a></li>
            <li><a className="language" href="">繁體中文</a></li>
            <li><a className="language" href="">日本語</a></li>
        </ul>
    </div>
  )
}

export default LanguagePopout