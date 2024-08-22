import React from 'react'
import { Link } from 'react-router-dom'
function SocialIcons() {
  return (

    <div style={{ width:'auto', backgroundColor:'#815939', height:'50px', display:'flex', justifyContent:'center', alignItems:'center'}}>

<Link to="http://www.facebook.com"><img style={{borderRadius:'30px', width:"30px", margin:'50px'}} src={require('../assets/images/facebook.png')} />
</Link>
<Link to="https://instagram.com"><img style={{borderRadius:'30px', width:"30px", margin:'50px'}} src={require('../assets/images/instagram.jpeg')} />
</Link>
<Link to="https://www.youtube.com/@ivanhall9102"><img style={{borderRadius:'30px', width:"50px", margin:'50px'}} src={require('../assets/images/youtubelogo.png')} />
</Link>
      </div>
  )
}

export default SocialIcons