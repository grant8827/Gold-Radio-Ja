import React from 'react'
function RadioPlayer() {

  return (
    <div className='radioPlayerDiv' style={{ justifyContent:'space-between', marginTop:'20px'}}>
    <div style={{width:'auto', borderRadius:'20px', margin:'10px', marginBottom:'80px',  padding:'10px'}}>
    <iframe width="100%" height="80" src="https://radioplayer.link/stream/index.php?autoplay=false&name=Gold Radio Jamaica&bgcolor=D21310&textcolor=FFFFFF&v=real&stream=https://stream.zeno.fm/gnuuefdohogtv" frameborder="0" scrolling="no" allow="autoplay;"></iframe> 
    </div>
  
     </div>
  )
}

export default RadioPlayer