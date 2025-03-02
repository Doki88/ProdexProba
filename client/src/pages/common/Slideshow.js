import { useEffect, useState } from "react";
// import "../../styles/slydeshow.css";
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from "lucide-react";
import "../../styles/image-slider.css";

 
// import car1 from "/images/home/Colosseum_11-7-2003.jpg"
// import car2 from "/images/home/Na_Koloseum_i_K_Franciszki_Rzymianki.jpg"
// import car3 from "/images/home/Roma_(2005).jpg"
// import car4 from "/images/home/Roma_Piazza_Venezia.jpg"
// import car5 from "/images/home/Roma-prati.jpg"

 
export default function Slideshow(){

  const car1 = "/images/home/Colosseum_11-7-2003.jpg";
  const car2 = "/images/home/Na_Koloseum_i_K_Franciszki_Rzymianki.jpg";
  const car3 = "/images/home/Roma_(2005).jpg";
  const car4 = "/images/home/Roma_Piazza_Venezia.jpg";
  const car5 = "/images/home/Roma-prati.jpg"
  

  const IMAGES = [car1, car2, car3, car4, car5]
    
  return (
       <div style={{
          maxWidth:"1200px",
          width: "100%",
          aspectRatio: "10 / 7",
          margin:"0 auto"
       }}>
           <ImageSlider imageUrls = {IMAGES}></ImageSlider>
       </div>
      
  )
}

// type ImageSliderProps = {
//   imageUrls: strging[]
// }

function ImageSlider({ imageUrls}){
  
      const [imageIndex, setImageIndex] = useState(0)

      function showNextImage(){
        setImageIndex(index => {
          if ( index === imageUrls.length - 1) return 0
          return index + 1
      })   
      }

      function showPrevImage(){
          setImageIndex(index => {
              if ( index === 0) return imageUrls.length - 1
              return index - 1
          })   
      }

      useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
          //showNextImage();
        }, 10000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, []);

      return (
      <div
           style={{width: "100%", height: "100%", position:"relative"}}>
          <div
             style={{ 
                width: "100%",
                height: "100%", 
                display: "flex",
                overflow: "hidden"
              }}>
              {imageUrls.map(url => (
                  <img 
                      key={url}
                      src={url} className="img-slider-img"
                      style={{translate: `${-100 * imageIndex}%`}}
                  />
              ))}
          </div>
          <button onClick={showPrevImage} className="img-slider-btn" style={{ left:0 }}>
              <ArrowBigLeft/> 
            </button>
          <button onClick={showNextImage} className="img-slider-btn" style={{ right:0 }}>
              <ArrowBigRight/> 
          </button>
          <div style={{
             position: "absolute",
             bottom: ".5rem",
             left: "50%",
             translate: "-50%",
             display: "flex",
             gap: ".25rem",
          }}>
              {imageUrls.map((_, index) => (
                 <button key={index} className="img-slider-dot-btn" onClick={() => 
                  setImageIndex(index)}>{index === imageIndex ? <CircleDot /> : <Circle/>} </button>
                
              ))}
          </div>

       
      </div>)

}