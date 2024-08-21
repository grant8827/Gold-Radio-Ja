import React from 'react'
import '../../App.css'
import SlideView from '../compViews/SlideView';
function Home() {
  return (
    <div className='homeBody'>
      <div className='radioPlayerDiv' style={{flexWrap:'wrap', width:'auto', height:'auto', margin:'auto', justifyContent:'center',}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
       <div style={{width:'400px', borderRadius:'20px', marginTop:'20px', marginLeft:'20px'}}>
       <iframe width="100%" height="80" src="https://radioplayer.link/stream/index.php?autoplay=false&name=GGFM90.1&bgcolor=900000&textcolor=FFFFFF&v=real&stream=https://fastcast4u.com/player/ggfm/" frameborder="0" scrolling="no" allow="autoplay;"></iframe>
       </div>
       <div style={{width:'400px', marginTop:'20px'}}>
     <h3 style={{fontSize:'25px', marginBottom:'10px', color:'#815939'}}>Gold Radio Jamaica</h3>
     <p>A source of Enlightenment to unbelievers. Creating a better society through Music Godly Entertainment.</p>
    </div>
        </div>
       <div style={{  width:'auto', height:'500px', marginBottom:'20px'}}>
       <SlideView/>
       </div>
      
      </div>
    </div>
  )
}

export default Home