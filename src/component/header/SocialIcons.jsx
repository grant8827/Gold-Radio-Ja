import React from 'react'

function SocialIcons() {
  return (
    <div style={{ width:'auto', backgroundColor:'#815939', height:'50px', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <img style={{borderRadius:'30px', width:"30px", margin:'50px'}} src={require('../assets/images/facebook.png')} />
    <img style={{borderRadius:'30px', width:"30px", margin:'50px'}} src={require('../assets/images/instagram.jpeg')} />
    <img style={{borderRadius:'30px', width:"50px", margin:'50px'}} src={require('../assets/images/youtubelogo.png')} />


      </div>
  )
}

export default SocialIcons