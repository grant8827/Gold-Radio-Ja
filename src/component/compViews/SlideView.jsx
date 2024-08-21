import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../../App.css'
// requires a loader
const images = [
   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",

];
function SlideView() {
  return (
    <Slide style={{width:'auto', height:'400px', alignContect:'center'}}>
      <div className="each-slide-effect" >
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div> 
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <img style={{marginLeft:'30px', width:'300px'}} src={require('../assets/images/slideimg1.jpg')}/>
                    <span>Rev Ivan Hall</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                <img style={{marginLeft:'30px', width:'300px'}} src={require('../assets/images/about-image.png')}/>
                    <span>Rev Ivan Hall</span>
                </div>
            </div>
        </Slide>
  );
}


export default SlideView

