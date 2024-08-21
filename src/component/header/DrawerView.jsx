import React from 'react'
import Drawer from 'react-modern-drawer';
import {Link} from 'react-router-dom';
import {  faHouse, faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
function DrawerView() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrwaer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <div>
          <button className="menuBarBtn"  style={{marginTop:'3px', textAlign:'center', backgroundColor:'#815939', border:'none', width:'50px', height:'45px', borderRadius:'10px', }} onClick={toggleDrwaer}><div style={{fontSize:'25px'}}><FontAwesomeIcon className="menuBarIcon" style={{color:'white', }} icon={faBars} /></div></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrwaer}
                direction='top'
                className='bla bla bla'
                style={{width:'250px',}}
            >
               <ul style={{alignContent:'left', margin:'auto', justifyContent:'left'}}>
                <li> <FontAwesomeIcon icon={faHouse} /><Link style={{margin:'10px'}} to="/">Home</Link></li>
                <li><Link  to="/About">About</Link></li>
                <li> <Link  to="/Schedule">Schedule</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                
            </ul>
            </Drawer> 
    </div>
  )
}
export default DrawerView