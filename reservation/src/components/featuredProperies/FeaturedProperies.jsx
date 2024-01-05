import "./featuredProperies.css"

const FeaturedProperies = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src={require('../../assets/1.jpg')} alt="" className="fpImg" />
            <span className="fpName">ApartHotel Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">starting from $120</span>
            <div className="fpRating">
                <button>9.1</button>
                <span>Excellent</span>
             </div>
        </div>

          <div className="fpItem">
            <img src={require('../../assets/1.jpg')} alt="" className="fpImg" />
            <span className="fpName">ApartHotel Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">starting from $120</span>
            <div className="fpRating">
                <button>9.1</button>
                <span>Excellent</span>
             </div>
        </div>

          <div className="fpItem">
            <img src={require('../../assets/1.jpg')} alt="" className="fpImg" />
            <span className="fpName">ApartHotel Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">starting from $120</span>
            <div className="fpRating">
                <button>9.1</button>
                <span>Excellent</span>
             </div>
        </div>

          <div className="fpItem">
            <img src={require('../../assets/1.jpg')} alt="" className="fpImg" />
            <span className="fpName">ApartHotel Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">starting from $120</span>
            <div className="fpRating">
                <button>9.1</button>
                <span>Excellent</span>
             </div>
        </div>
    </div>
  )
}

export default FeaturedProperies