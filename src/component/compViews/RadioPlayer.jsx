import React from 'react'

function RadioPlayer() {
  return (
    <div className='radioPlayerDiv' style={{display:'flex', justifyContent:'space-between', marginTop:'20px'}}>
    <div style={{width:'400px', borderRadius:'20px', margin:'20px',  padding:'10px'}}>
    <iframe width="100%" height="80" src="https://radioplayer.link/stream/index.php?autoplay=false&name=Gold Radio Jamaica&bgcolor=D21310&textcolor=FFFFFF&v=real&stream=https://stream.zeno.fm/gnuuefdohogtv" frameborder="0" scrolling="no" allow="autoplay;"></iframe> 
    </div>
    <div style={{width:'400px', marginTop:'20px', padding:'20px'}}>
  <h3 style={{fontSize:'25px', color:'#815939'}}>Gold Radio Jamaica</h3>
  <p >A source of Enlightenment to unbelievers. Creating a better society through Music Godly Entertainment.</p>
 </div>
     </div>
  )
}

export default RadioPlayer