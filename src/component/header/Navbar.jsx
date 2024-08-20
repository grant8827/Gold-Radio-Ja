import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome'
import { faCoffee, faHouse} from '@fortawesome/free-solid-svg-icons'
import SocialIcons from './SocialIcons';
export default function Navbar() {
  return (
    <div>
    <div style={{backgroundColor:'#815939', height:'50px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <img style={{borderRadius:'30px', width:"30px", margin:'50px'}} src={require('../assets/images/facebook.png')} />
      <img style={{borderRadius:'30px', width:"30px", margin:'50px'}} src={require('../assets/images/instagram.jpeg')} />
      <img style={{borderRadius:'30px', width:"50px", margin:'50px'}} src={require('../assets/images/youtubelogo.png')} />


        </div>
        <div style={{backgroundColor:'#FFFAE6', height:'180px', padding:'20px', textAlign:'center'}}>
        <img style={{borderRadius:'20px'}} src={require('../assets/images/gold_radioja.png')} />
        </div>
        <nav className='navBar' style={{backgroundColor:'#f7e99a', height:"50px", width:"%100", }}>
            <ul className='navStyle'>
                <li> <FontAwesomeIcon icon={faHouse} /><Link style={{margin:'10px'}} to="/">Home</Link></li>
                <li><Link  to="/About">About</Link></li>
                <li> <Link  to="/Schedule">Schedule</Link></li>
                <li><Link s to="/Contact">Contact</Link></li>
            </ul>
        </nav>
        </div>
  )
}
