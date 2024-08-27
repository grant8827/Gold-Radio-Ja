import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../../App.css'
import slideimg1 from '../assets/images/slideimg1.jpg';
import slideimg2 from '../assets/images/about-image.png';
import slideimg3 from '../assets/images/about-image.png';

// requires a loader
const images = [
   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",

];
function SlideView() {
  return (
    <Slide style={{ margin:'20px', width:'100%', height:'auto', alignContect:'center'}}>
      <div className="each-slide-effect" >
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                <div className='slides' style={{backgroundColor:'#00000030',}}>
                    <img style={{margin:'10px', width:'300px'}} src={slideimg2}/>
                    <h3 style={{color:'white', backgroundColor:'#0000001F'}}>Saturday Morning Praise with Pastor Ivan Hall</h3>

                    </div>
                </div>
            </div> 
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                   
                    <div className='slides' style={{backgroundColor:'#00000030', margin:'10px', }} >
                    <img style={{margin:'10px', width:'300px'}} src={slideimg1}/>
                    <h3 style={{color:'white',  backgroundColor:'#00000030'}}>The Prophetic Company with Prophetess Al Marie Campbell</h3>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
               
                    <div className='slides' style={{backgroundColor:'#00000030', margin:'10px', }}>
                    <img style={{margin:'10px', width:'300px'}} src={slideimg3}/>
                    <h3 style={{color:'white',  backgroundColor:'#00000030'}}>Arise Jamaica Arise world with Pastor Ivan hall</h3>

                    </div>
                </div>
            </div>
        </Slide>
  );
}


export default SlideView

