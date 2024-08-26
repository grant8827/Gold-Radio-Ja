import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/pagesStyles.css'
function AboutOwner() {
  return (
    <div>
        <div className='abourtOwne' style={{display:'flex', justifyContent:'center'}}>
            <img style={{width:'300px', margin:'20px'}} src={require('../assets/images/ivanhallimg.png')}/>
            
            <div className='owerDetails' style={{margin:'20px', width:'500px',}}>
            <h3>OASIS IN THE DESERT</h3> 
            <p>GOLD FM. AN OASIS IN THE DESERT OF TIME GOLD FM IS THE VISION OF CEO PASTOR IVAN HALL TO PROVIDE ENCOURAGEMENT AND STRENGTH FOR BELIEVERS.</p>
            <Link to="/About"><button style={{backgroundColor:'#815939', border:'none', borderRadius:'10px', padding:'10px', color:'white'}}>Read More</button></Link>
            </div>
        </div>
    </div>
  )
}

export default AboutOwner