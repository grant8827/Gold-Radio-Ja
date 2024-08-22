import React from 'react'
import '../../App.css'
import SlideView from '../compViews/SlideView';
import RadioPlayer from '../compViews/RadioPlayer';
function Home() {
  return (
    <div className='homeBody'>
      
      <div className='bodyView' >
      <RadioPlayer/>
       <div className='slideShow' style={{  width:'auto', height:'500px', marginTop:'50px', margin:'20px'}}>
       <SlideView/>
       </div>
      
      </div>
      

    </div>
  )
}

export default Home