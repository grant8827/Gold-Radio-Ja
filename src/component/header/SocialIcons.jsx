import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.jpeg';
import youtube from '../assets/images/youtubelogo.png';

function SocialIcons() {
  return (

    <div style={{ width:'auto', backgroundColor:'#815939', height:'50px', display:'flex', justifyContent:'center', alignItems:'center'}}>

<Link to="http://www.facebook.com"><img style={{borderRadius:'30px', width:"30px", margin:'50px'}} src={facebook} alt='facebook' />
</Link>
<Link to="https://instagram.com"><img style={{borderRadius:'30px', width:"30px", margin:'50px'}} src={instagram} alt='instagram' />
</Link>
<Link to="https://www.youtube.com/@ivanhall9102"><img style={{borderRadius:'30px', width:"50px", margin:'50px'}} src={youtube} alt='youtube'/>
</Link>
      </div>
  )
}

export default SocialIcons