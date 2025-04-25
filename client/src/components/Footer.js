// import "../styles/footer.css"

// export default function Footer(){
//     return (
    
//     <div className="footer">
//             <div className="footer-title">
//                  PRODEX DOO
//              </div>

//             <div className="flex-container">
//                 <div className="flex-container-one">
//                     <div className="flex-container-two">
//                           <img src="/images/svg/reshot-icon-location-map-marker-W7VG495AYC.svg"
//                                 className="img-svg-map" alt="..."/>
//                      </div>
//                     <div className="flex-container-two-text">
//                        <p>Adresa:<br></br>Cara Lazara 35, 74480 Modriča, BIH</p>

//                     </div>
                        
//                 </div>
//                 <div class="flex-container-one">
//                     <div className="flex-container-two">
//                         <img src="/images/svg/phone-1.svg"
//                         className="img-svg-phone" alt="..."
//                         />   
//                     </div>
//                     <div className="flex-container-two-multi">
//                         <div className="flex-container-two-multi-inner">
//                             <p>Tel:<br></br>053/820-891</p>
//                         </div>
//                         <div className="flex-container-two-multi-inner-middle">
//                             <p>Fax:<br></br>053/820-892</p>
                           
//                         </div>
//                         <div className="flex-container-two-multi-inner">
//                             <p>Mob:<br></br>066-119-921</p>
//                         </div>
//                     </div>
                     
//                 </div>
//                 <div className="flex-container-one">
//                     <div className="flex-container-two">
//                         <img src="/images/svg/reshot-icon-email-P9WA8LS724.svg"
//                             className="img-svg-email" alt="..."/>   
//                      </div>
//                     <div className="flex-container-two-text">
//                        <p>Email:<br></br>prodexmd@yahoo.com</p> 
//                     </div>
                    
//                 </div>  
             
//             </div>
//             <div className="footer-below">
//                     <div className="footer-copyright">
//                         <p>
//                             All rights reserved@{new Date().getFullYear()} Prodex DOO  .
//                         </p>
//                     </div>
                     
//             </div>
//     </div>
//     )
// }
 

 
 

import React from 'react';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">My Website Footer</h2>

      <div className="footer-box-container">
        <div className="footer-box">Box 1</div>
        <div className="footer-box">Box 2</div>
        <div className="footer-box">Box 3</div>
      </div>

      <div className="footer-info">
        <p>© 2025 MyWebsite — All rights reserved. Here's some info about the site.</p>
      </div>
    </footer>
  );
};

export default Footer;
