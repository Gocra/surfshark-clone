import "./InfoCard.css"

const InfoCard = ({duration, currency, amount, date, save, billInfo, linkText}) => {
    return (
        <a href="#" className="info-card">
          <div className="time highlighted-text">{duration}</div>
          <div className="price">
            <span className="currency">{currency}</span>
            <span className="amount">{amount}</span>
            <span className="date">{date}</span>
          </div>
          <div className="save">{save}</div>
          <p className="bill-info">{billInfo}</p>
          <button className="btn btn-md btn-light">{linkText}</button>
        </a>
      )
  }

export default InfoCard