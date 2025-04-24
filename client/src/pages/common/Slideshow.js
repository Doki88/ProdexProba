// import { useEffect, useState } from "react";
// // import "../../styles/slydeshow.css";
// import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from "lucide-react";
// import "../../styles/image-slider.css";

 
// // import car1 from "/images/home/Colosseum_11-7-2003.jpg"
// // import car2 from "/images/home/Na_Koloseum_i_K_Franciszki_Rzymianki.jpg"
// // import car3 from "/images/home/Roma_(2005).jpg"
// // import car4 from "/images/home/Roma_Piazza_Venezia.jpg"
// // import car5 from "/images/home/Roma-prati.jpg"

 
// export default function Slideshow(){

//   const car1 = "/images/home/Colosseum_11-7-2003.jpg";
//   const car2 = "/images/home/Na_Koloseum_i_K_Franciszki_Rzymianki.jpg";
//   const car3 = "/images/home/Roma_(2005).jpg";
//   const car4 = "/images/home/Roma_Piazza_Venezia.jpg";
//   const car5 = "/images/home/Roma-prati.jpg"
  

//   const IMAGES = [car1, car2, car3, car4, car5]
    
//   return (
//        <div style={{
//           maxWidth:"1200px",
//           width: "100%",
//           aspectRatio: "10 / 7",
//           margin:"0 auto"
//        }}>
//            <ImageSlider imageUrls = {IMAGES}></ImageSlider>
//        </div>
      
//   )
// }

// // type ImageSliderProps = {
// //   imageUrls: strging[]
// // }

// function ImageSlider({ imageUrls}){
  
//       const [imageIndex, setImageIndex] = useState(0)

//       function showNextImage(){
//         setImageIndex(index => {
//           if ( index === imageUrls.length - 1) return 0
//           return index + 1
//       })   
//       }

//       function showPrevImage(){
//           setImageIndex(index => {
//               if ( index === 0) return imageUrls.length - 1
//               return index - 1
//           })   
//       }

//       useEffect(() => {
//         //Implementing the setInterval method
//         const interval = setInterval(() => {
//           //showNextImage();
//         }, 10000);

//         //Clearing the interval
//         return () => clearInterval(interval);
//     }, []);

//       return (
//       <div
//            style={{width: "100%", height: "100%", position:"relative"}}>
//           <div
//              style={{ 
//                 width: "100%",
//                 height: "100%", 
//                 display: "flex",
//                 overflow: "hidden"
//               }}>
//               {imageUrls.map(url => (
//                   <img 
//                       key={url}
//                       src={url} className="img-slider-img"
//                       style={{translate: `${-100 * imageIndex}%`}}
//                       alt="..."
//                   />
//               ))}
//           </div>
//           <button onClick={showPrevImage} className="img-slider-btn" style={{ left:0 }}>
//               <ArrowBigLeft/> 
//             </button>
//           <button onClick={showNextImage} className="img-slider-btn" style={{ right:0 }}>
//               <ArrowBigRight/> 
//           </button>
//           <div style={{
//              position: "absolute",
//              bottom: ".5rem",
//              left: "50%",
//              translate: "-50%",
//              display: "flex",
//              gap: ".25rem",
//           }}>
//               {imageUrls.map((_, index) => (
//                  <button key={index} className="img-slider-dot-btn" onClick={() => 
//                   setImageIndex(index)}>{index === imageIndex ? <CircleDot /> : <Circle/>} </button>
                
//               ))}
//           </div>

       
//       </div>)

// }

 

 

import React, { useState, useEffect } from 'react';
import "../../styles/image-slider.css";

const images = [
  '/images/home/Colosseum_11-7-2003.jpg',
  '/images/home/Na_Koloseum_i_K_Franciszki_Rzymianki.jpg',
  '/images/home/Roma_(2005).jpg',
  '/images/home/Roma_Piazza_Venezia.jpg',
  '/images/home/Roma-prati.jpg',
];
const Slideshow = ({ interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="slider-wrapper">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {images.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Slide ${index}`} className="slide-image" />
            <div className="overlay-text">
              <h1>DOBRODOŠLI!</h1>
              <p>Preduzeće Prodex d.o.o Modriča osnovano 2000.god, nudi
                    mogućnost cijelokupnog rješavanja široke palete problema
                    mogućnost cijelokupnog rješavanja široke palete problema
                    vezanih za industriju i industrijske potrebe.
                    U ponudi industrijske opreme, nalazi se paleta najpoznatijih
                    svjetskih firmi kao što su: LS (LS frekventni regulatori,
                    kontaktori i bimetalni releji. Automatski osigurači) Finder
                    (Relejna oprema), KBR (kompenzacija reaktivne energije).
                    </p>
                    {/* <button className="aboutus-button">O nama</button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
      <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slideshow;
