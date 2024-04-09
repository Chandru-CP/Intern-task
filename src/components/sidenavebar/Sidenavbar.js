/* eslint-disable jsx-a11y/alt-text */
import './Sidenavbar.css';
import HomeIcon from '../../asserts/icon-side/Home.png';
import ChartIcon from '../../asserts/icon-side/Chart.png';
import BoxIcon from '../../asserts/icon-side/Box 3.png';
import LayersIcon from '../../asserts/icon-side/Layers.png';
import RocketIcon from '../../asserts/icon-side/Rocket.png';
import TimerIcon from '../../asserts/icon-side/Timer.png';
import SettingIcon from '../../asserts/icon-side/Settings.png';
import LogoutIcon from '../../asserts/icon-side/Logout.png';
import MainNavbar from '../Mainnavbar/mainnavbar';
import Home from '../home/home';
import { useState } from 'react';

export default function SideNav() {
    
    const [isHomeVisible, setIsHomeVisible] = useState(true);
    const [isAnalyticsVisible, setIsAnalyticsVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const toggleHomeVisibility = () => {
        setIsHomeVisible(true);
        setIsAnalyticsVisible(false);
        setSelectedItem('home');


    };
    
    const toggleAnalyticsVisibility = () => {
        setIsAnalyticsVisible(true);
        setIsHomeVisible(false);
        setSelectedItem('analytics');

    };
    const  Activity = () =>{
        setSelectedItem('Activity');

    }
    const  Transformation = () =>{
        setSelectedItem('Transformation');

    }
    const  Library = () =>{
        setSelectedItem('Library');

    }
    const  Setting = () =>{
        setSelectedItem('Setting');

    }
    const  Logout = () =>{
        setSelectedItem('Logout');

    }


    

    return (
        <div style={{display:"flex",flexGrow:'1'}}>
            <div className="Sidenavbar">
                <h2><img src={BoxIcon} className='main-icon' /><span>Catalics</span></h2>
                <ul className="top_side_navbar_ul">
                <li className={`top_side_navbar_li ${selectedItem === 'home' ? 'selected' : ''}`} onClick={toggleHomeVisibility}>
                    <img src={HomeIcon} className='side-icon' alt='Home Icon' />
                    <span>Home</span>
                </li>
        <li className={`top_side_navbar_li ${selectedItem === 'Activity' ? 'selected' : ''}`} onClick={Activity}>
          <img src={TimerIcon} className='side-icon' alt='Timer Icon' />
          <span>Activity</span>
        </li>
        <li className={`top_side_navbar_li ${selectedItem === 'analytics' ? 'selected' : ''}`} onClick={toggleAnalyticsVisibility}>
          <img src={ChartIcon} className='side-icon' alt='Chart Icon' />
          <span>Analytics</span>
        </li>
        <li className={`top_side_navbar_li ${selectedItem === 'Transformation' ? 'selected' : ''}`} onClick={Transformation}>
          <img src={RocketIcon} className='side-icon' alt='Rocket Icon' />
          <span>Transformation</span>
        </li>
        <li  className={`top_side_navbar_li ${selectedItem === 'Library' ? 'selected' : ''}`} onClick={Library}>
          <img src={LayersIcon} className='side-icon' alt='Layers Icon' />
          <span>Library</span>
        </li>
                </ul>
                <ul className="bottom_side_navbar_ul">
                    <li className={`top_side_navbar_li ${selectedItem === 'Setting' ? 'selected' : ''}`}onClick={Setting}>
                        <img src={SettingIcon} className='side-icon' />Setting</li>
                    <li className={`top_side_navbar_li ${selectedItem === 'Logout' ? 'selected' : ''}`} onClick={Logout}>
                        <img src={LogoutIcon} className='side-icon' />Logout</li>
                </ul>
            </div>
            <div className='sidecontent'>
                {isAnalyticsVisible && <MainNavbar />}
                {isHomeVisible && <Home />}
            </div>
        </div>
    )
}
