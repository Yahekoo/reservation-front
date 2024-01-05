import './featured.css'
const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img className="featuredImg" src={require("../../assets/1.jpg")} alt=""/>
        <div className="featuredTitles">
          <h1>Casablanca</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src={require("../../assets/2.jpg")} alt=""/>
        <div className="featuredTitles">
          <h1>Rabat</h1>
          <h2>99 properties</h2>
        </div>
      </div>
        <div className="featuredItem">
        <img className="featuredImg" src={require("../../assets/3.jpg")} alt=""/>
        <div className="featuredTitles">
          <h1>Marrakech</h1>
          <h2>23 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured