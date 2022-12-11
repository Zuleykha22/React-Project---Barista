import React from 'react'
import '../BookTable/BookTable.scss'
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SelectPersonNumber from '../SelectPersonNumber/SelectPersonNumber';
import DatePicker from '../DatePicker/DatePicker';
import TimePicker from '../TimePicker/TimePicker';
import EastIcon from '@mui/icons-material/East';


function BookTable() {
    return (
        <div>
            <div className="book-table">
                <div className="book-table-top">
                    <h2>What Happens Here</h2>
                    <h1>COFFEE BUILD YOUR BASE.</h1>
                    <div className="line"></div>
                </div>

                <div className="booking-details">
                    <div className="select select-person-number">
                        {/* <h3>1 Person</h3> */}
                        <SelectPersonNumber/>
                        <div className="icon-box">
                            <GroupsIcon className='booking-icon'/>
                        </div>
                    </div>
                    <h2>FOR</h2>
                    <div className="select select-date">
                        {/* <h3>25.10.2022</h3> */}
                        <DatePicker/>
                        <div className="icon-box">
                            <CalendarMonthIcon className='booking-icon'/>
                        </div>
                    </div>
                    <h2>AT</h2>
                    <div className="select select-time">
                        {/* <h3>7:00 pm</h3> */}
                        <TimePicker/>
                        <div className="icon-box">
                            <AccessTimeIcon className='booking-icon'/>
                        </div>
                        
                    </div>
                    <button className='booking-button'>BOOK A TABLE</button>

                    
                </div>

                <div className="options">

                    <div className="option">
                        <div className="img-box">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/h-1-img-1.jpg" alt="" />
                            <div className="overlay-img-box"></div>
                        </div>
                        
                        <div className="option-details">
                            <span className='option-number'>01</span>
                            <span className='option-head'>BEAUTIFUL PLACE</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At cumque unde assumenda blanditiis nobis praesentium maiores. Fuga ipsum non veritatis excepturi minima quod porro officia autem doloribus voluptas, libero vel.</p>

                            <h5>READ MORE <EastIcon className='arrow-right-book'/></h5>
                        </div>
                    </div>

                    <div className="option">
                        <div className="img-box">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/h-1-img-2.jpg" alt="" />
                            <div className="overlay-img-box"></div>
                        </div>
                        
                        <div className="option-details">
                            <span className='option-number'>02</span>
                            <span className='option-head'>FEEL THE COFFEE</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At cumque unde assumenda blanditiis nobis praesentium maiores. Fuga ipsum non veritatis excepturi minima quod porro officia autem doloribus voluptas, libero vel.</p>

                            <h5>READ MORE <EastIcon className='arrow-right-book'/></h5>
                        </div>
                    </div>

                    <div className="option">
                        <div className="img-box">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/h-1-img-3.jpg" alt="" />
                            <div className="overlay-img-box"></div>
                        </div>
                        
                        <div className="option-details">
                            <span className='option-number'>03</span>
                            <span className='option-head'>FULL TASTE</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At cumque unde assumenda blanditiis nobis praesentium maiores. Fuga ipsum non veritatis excepturi minima quod porro officia autem doloribus voluptas, libero vel.</p>

                            <h5>READ MORE <EastIcon className='arrow-right-book'/></h5>
                        </div>
                    </div>

                    
                </div>

                
            </div>

        </div>
    )
}

export default BookTable