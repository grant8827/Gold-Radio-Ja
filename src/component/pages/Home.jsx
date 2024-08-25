import React from 'react'
import '../../App.css'
import SlideView from '../compViews/SlideView';
import RadioPlayer from '../compViews/RadioPlayer';
import AboutOwner from '../compViews/AboutOwner';
import Bonner from '../compViews/Bonner';
function Home() {
  return (
    <div className='homeBody'>
      
      <div className='bodyView' >
      <RadioPlayer/>
      <Bonner/>
       <div className='slideShow' style={{  width:'auto', height:'500px', marginTop:'50px', margin:'20px'}}>
       <SlideView/>
       </div>
      <AboutOwner/>
      </div>
      

    </div>
  )
}

export default Home