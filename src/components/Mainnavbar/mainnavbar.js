/* eslint-disable jsx-a11y/alt-text */
import Efficiency from '../efficiency/Efficiency';
import'./mainnavbar.css';
import CardBody from '../card/cardBody';
import Page from '../page_view/page';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you have the correct path to your font awesome CSS file
import notification from '../../asserts/nav-icon/Component 1.png';
import message from '../../asserts/nav-icon/Frame 44.png';
import profile from '../../asserts/nav-icon/Ellipse 49.png';
import Setting from '../../asserts/nav-icon/Frame 45.png';


export default function mainnavbar(){
    return(

    <div className='container'>
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
        <div className='content'>
            <button className='content-button  active-button'>+ Create a Report</button>
            <button className='content-button use'>share this dashboard</button>
            <button className='content-button not-use'>Select Duration</button>
            <button className='content-button not-use'>Compare with Duration</button>
        </div> 
        <div className='graph'>
            <Efficiency/>
        </div>
        <div className='ca'>
            <CardBody/>
        </div>
        <div>
            <Page/>
        </div>
    </div>

    
    )
}