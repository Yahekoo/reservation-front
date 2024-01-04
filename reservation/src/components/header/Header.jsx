import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './header.css'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'

const Header = ({type}) => {

    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);

    const [options, setOptions] = useState({
        adult : 1,
        children : 0,
        room: 1
    })

    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  
   const handleOption = (name,operation) => {
      setOptions((prev)=> {
        return {
            ...prev,[name] : operation === "i" ? options[name] + 1 : options[name] - 1,
        }
      })
   }

  return (
    <div className='header'>
        <div className={type !== "list" ?  "headerContainer" : "headerContainer listMode"}>
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
             <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
             <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
            </div>
             <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
            </div>
             <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxis</span>
            </div>
        </div>



       { type !== "list" &&
       <>
        <h1 className="headerTitle">A lifetime of discounts ? It's Genius</h1>
        <p className="headerDesc">Get Rewarded for your travels - unlock instant savings of 10M or more with a free Landbooking account</p>

        <button className="headerButton">Sign in / Register</button>
     

        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerICon"/>
                <input
                    type="text"
                    placeholder='What is your destination ? '
                    className='headerSearchInput'
                />
            </div>

             <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerICon"/>
                <span
                    onClick={() => setOpenDate(!openDate)}
                    type="text"
                    placeholder='What is your destination ? '
                    className='headerSearchText'
                >{`${format(date[0].startDate, "MM/dd/yyyy")}`}
                to {`${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
              {
                openDate &&   <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    />
              }
            </div>

             <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerICon"/>
                <span
                    onClick={()=> setOpenOptions(!openOptions)}
                    type="text"
                    placeholder='What is your destination ? '
                    className='headerSearchText'
                >  {`${options.adult}`} adult • {`${options.children}`} children • {`${options.room}`} room
                 </span>
                {
                    openOptions &&  <div className="options">
                    <div className="optionsItem">
                        <span className='optionText'>Adults</span>
                        <div className="optionsCounter">
                            <button disabled={options.adult <= 1} onClick={() => handleOption("adult","d")}
                            className='optionCounterButton'>-</button>
                            <span className='optionCounterNumber'>{options.adult}</span>
                            <button onClick={() => handleOption("adult","i")} className='optionCounterButton'>+</button>
                        </div>
                    </div>

                     <div className="optionsItem">
                        <span className='optionText'>Children</span>
                         <div className="optionsCounter">
                            <button disabled={options.children <= 0} onClick={() => handleOption("children","d")} className='optionCounterButton'>-</button>
                            <span className='optionCounterNumber'>{options.children}</span>
                            <button onClick={() => handleOption("children","i")} className='optionCounterButton'>+</button>
                        </div>
                    </div>

                     <div className="optionsItem">
                        <span className='optionText'>Rooms</span>
                         <div className="optionsCounter">
                            <button disabled={options.room <= 1} onClick={() => handleOption("room","d")} className='optionCounterButton'>-</button>
                            <span className='optionCounterNumber'>{options.room}</span>
                            <button onClick={() => handleOption("room","i")} className='optionCounterButton'>+</button>
                        </div>
                    </div>
                 </div>
                }
            </div>

             <div className="headerSearchItem">
                <button className="headerButton">Search</button>
            </div>
        </div>

            </>}





    </div>
       </div>
  )
}

export default Header