import React from 'react';
import './nav.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons';
import DrawerView from './DrawerView';
import SocialIcons from './SocialIcons';
import logo from '../assets/images/gold_radioja.png';
export default function Navbar() {
  return (
    <div className='mainNav'>
   <SocialIcons/>
        <div style={{backgroundColor:'#FFFAE6', height:'220px', padding:'20px', textAlign:'center'}}>
        <img style={{borderRadius:'20px'}} src={logo} />
        </div>
        <nav className='navBar' style={{backgroundColor:'#f7e99a', height:"50px", width:"auto", }}>
            <ul className='navStyle'>
                <li> <FontAwesomeIcon icon={faHouse} /><Link style={{margin:'10px'}} to="/">Home</Link></li>
                <li><Link  to="/About">About</Link></li>
                <li> <Link  to="/Schedule">Schedule</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
               
            </ul>
            <div className='drawerMenu'> <DrawerView/></div>
        </nav>
        
        </div>
  )
}
