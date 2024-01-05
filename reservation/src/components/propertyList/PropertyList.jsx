import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={require("../../assets/4.jpg")} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotel</h2>
            </div>
        </div>

          <div className="pListItem">
            <img src={require("../../assets/3.jpg")} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>245 cabin</h2>
            </div>
        </div>

          <div className="pListItem">
            <img src={require("../../assets/2.jpg")} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>298 apartment</h2>
            </div>
        </div>

          <div className="pListItem">
            <img src={require("../../assets/1.jpg")} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>33 hotel</h2>
            </div>
        </div>

    </div>
  )
}

export default PropertyList