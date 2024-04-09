/* eslint-disable jsx-a11y/alt-text */
import notification from '../../asserts/nav-icon/Component 1.png';
import message from '../../asserts/nav-icon/Frame 44.png';
import profile from '../../asserts/nav-icon/Ellipse 49.png';
import Setting from '../../asserts/nav-icon/Frame 45.png';
import'./procedure.css';
import Group from '../../asserts/procedure/Group 264.png';
import arrow from '../../asserts/procedure/Arrow 1.png';
import clock1 from '../../asserts/procedure/Time Circle.png';
import plus from '../../asserts/procedure/Plus.png'

export default function procedure(){
    return(
        <div className="procedure">
            <nav  className="navbar">
            <div className='navbar-left'>
                <ul>
                    <li><input className='input-box' type='text'/></li>
                </ul>
            </div>
            <div className='navbar-right' style={{alignContent:"center"}}>
                <ul>
                    <li><img  className="right-icon"src={notification}/></li>
                    <li><img className="right-icon"src={message}/></li>
                    <li><img className="right-icon"src={Setting}/></li>
                    <li><img className="right-icon"src={profile}/></li>
                </ul>
            </div>
        </nav>
        <div className='procedure-content' >
            <div style={{display:'flex'}}>
                <div style={{alignContent: 'flex-end'}}>
                    <p style={{marginBottom:'100px'}}>Active Time</p>
                    <p>Wait Time</p>
                </div>
                <div>
                <div className='procedure-flow-diagram' >
                <div class="pentagon">
                        <img src={Group} />
                        <div class="overlay">
                            <span>Approve</span><br/>
                            <span>Content</span>
                        </div>
                    </div>
                    <img src={arrow} className='arrow' />

                    <img src={clock1} className='clock'/>

                    <img src={arrow} className='arrow' />
                    <div class="pentagon">
                        <img src={Group} />
                        <div class="overlay">
                            <span>Create</span><br/>
                            <span>Content</span>
                        </div>
                    </div>
                    <img src={arrow} className='arrow' />

                    <img src={clock1} className='clock'/>

                    <img src={arrow} className='arrow' />
                    <div class="pentagon">
                        <img src={Group} />
                        <div class="overlay">
                            <span>Approve</span><br/>
                            <span>Content</span>
                        </div>
                    </div>
                    <img src={arrow} className='arrow' />

                    <img src={clock1} className='clock'/>

                    <img src={arrow} className='arrow' />
                    <div class="pentagon">
                        <img src={Group} />
                        <div class="overlay">
                            <span>Run</span><br/>
                            <span>Sample</span><br/>
                            <span>Test</span>
                        </div>
                    </div>
                    <img src={arrow} className='arrow' />

                    <img src={clock1} className='clock'/>

                    <img src={arrow} className='arrow' />
                    <div class="pentagon">
                        <img src={Group} />
                        <div class="overlay">
                            <span>Launch Full</span><br/>
                            <span>Campanign</span>
                        </div>
                    </div>

                    <img src={plus}  className='clock'/><br/>
                    <div className='timing'>
                        <hr style={{width:'1300px'}}/>
                        <p style={{textAlignLast:'justify'}}>1Day   2Day 4hours  4hours 1Day</p>
                        <hr style={{width:'1300px'}}/>
                    </div><br/>
                    <div className='timing-details'>

                    <p style={{display:'flex'}}>
                        <div className='card'><span className='timing-detail-span'>2 week (Wait<br/> for availibility) </span></div>
                        <div className='card'><span className='timing-detail-span'>1 week (Wait <br/>for approval <br/>authority) </span></div>
                        <div className='card'><span className='timing-detail-span'>2 week (Wait <br/>for IT support) </span></div>
                        <div className='card'><span className='timing-detail-span'>1 week (Wait <br/>for test <br/>responce) </span></div></p>
                        <p style={{display:'flex',alignItems:'center'}}><i class="arrow1 left-arrow"></i><hr style={{width:'1300px'}}/><i class="arrow1 right-arrow"></i></p>
                        <p style={{display:'ruby'}}><p className='overview'>Flow time = 47 Days </p> <p className='overview'>Total Active time = 5 Days</p> <p className='overview'>Flow Efficiency = 11%</p></p>

                </div>
                </div>
                </div>
            </div>

        </div>
        <button className='procedure-button'>save</button>


        </div>
    )
}