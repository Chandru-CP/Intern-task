/* eslint-disable jsx-a11y/alt-text */
import notification from '../../asserts/nav-icon/Component 1.png';
import message from '../../asserts/nav-icon/Frame 44.png';
import profile from '../../asserts/nav-icon/Ellipse 49.png';
import Setting from '../../asserts/nav-icon/Frame 45.png';
import './home.css';
import video from '../../asserts/Video thumbnail.png';
import Slideshow from './slideshow';
import Procedure from '../procedure/procedure';
import { useState } from 'react';

export default function Home() {
  const [isProcedureVisible, setIsProcedureVisible] = useState(false);
  
  const toggleProcedureVisibility = () => {
    setIsProcedureVisible(!isProcedureVisible);
  };

  const slides = [
    {
      content: (
        <div>
          <span className='Home-p-button'>1/6</span>
          <p className='Home-p-content'>Build your Development value stream map</p>
          <button className='Home-button' onClick={toggleProcedureVisibility}>start build</button>
        </div>
      )
    },
    {
      content: (
        <div>
          <span className='Home-p-button'>2/6</span>
          <p className='Home-p-content'>Optimize your workflow with automation</p>
          <button className='Home-button' onClick={toggleProcedureVisibility}>start build</button>
        </div>
      )
    },
    {
      content: (
        <div>
          <span className='Home-p-button'>3/6</span>
          <p className='Home-p-content'>Deliver high-quality software <br/>faster</p>
          <button className='Home-button' onClick={toggleProcedureVisibility}>start build</button>
        </div>
      )
    }
    // Add more slides as needed
  ];

  return (
    <div className="home">
      <div className={isProcedureVisible ? "home-main-content hidden" : "home-main-content"}>
        <div style={{display:'flex', flexGrow:"1"}}>

          <div style={{textAlign: '-webkit-center', height:'fit-content'}}>
          <nav className="navbar">
          <div className='navbar-left'>
            <ul>
              <li><input className='input-box' type='text'/></li>
            </ul>
          </div>
        </nav> 
            <h2>Set-up a Catalix for Success </h2>
            <p>Get Catalix up to date or start your Transformation by following the guide below</p>
            <Slideshow slides={slides} />
          </div>

          <div className="right-side-content" style={{backgroundColor:'white', height:"800px",textAlignLast:'left',padding:'30px', position: 'relative',width:'391.96px',margin:'20px',borderRadius:'20px'}}>
          <nav className="navbar">
          <div className='navbar-right' style={{alignContent:"center"}}>
            <ul>
              <li><img className="right-icon" src={notification}/></li>
              <li><img className="right-icon" src={message}/></li>
              <li><img className="right-icon" src={Setting}/></li>
              <li><img className="right-icon" src={profile}/></li>
            </ul>
          </div>
        </nav> 
            <h2 style={{textAlignLast:'left'}}>Get ready to Transform</h2>
            <p>Here's a video to get started. As transformation progresses, you'll get fresh tips and insights here.</p>
            <img src={video}/>
          </div>
        </div>
      </div>
      {isProcedureVisible && <Procedure />}
    </div>
  );
}
