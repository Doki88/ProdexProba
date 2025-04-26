 
import "../styles/contact.css"
import Slideshow from "./common/Slideshow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; // formerly faMapMarkerAlt
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Contact(){

    
    return (
        <>
             <Slideshow/>
             {/* <div className="contact-container">
                <div className="contact-title">
                    KONTAKT
                </div>
                <div className="contact-flex">
                    <div className="contact-flex-one">
                        <div className="contact-flex-two">
                            <img src="/images/svgcontacts/reshot-icon-location-map-marker-W7VG495AYC.svg"
                                    className="img-svg-map" alt="..."/>
                        </div>
                        <div className="contact-flex-two-text">
                        <p>Adresa:<br></br>Cara Lazara 35, 74480 Modriča, BIH</p>

                        </div>
                            
                    </div>
                    <div class="contact-flex-one">
                        <div className="contact-flex-two">
                            <img src="/images/svgcontacts/phone-1.svg"
                            className="img-svg-phone" alt="..."
                            />   
                        </div>
                        <div className="contact-flex-multi">
                            <div className="contact-flex-two-multi-inner">
                                <p>Tel:<br></br>053/820-891</p>
                            </div>
                            <div className="contact-flex-two-multi-inner-middle">
                                <p>Fax:<br></br>053/820-892</p>
                            
                            </div>
                            <div className="contact-flex-two-multi-inner">
                                <p>Mob:<br></br>066-119-921</p>
                            </div>
                        </div>
                     
                    </div>
                    <div className="contact-flex-one">
                        <div className="contact-flex-two">
                            <img src="/images/svgcontacts/reshot-icon-email-P9WA8LS724.svg"
                                className="img-svg-email" alt="..."/>   
                        </div>
                        <div className="contact-flex-two-text">
                        <p>Email:<br></br>prodexmd@yahoo.com</p> 
                        </div>
                        
                    </div>  
                        
                </div>
                <div className="working-hours">
                    <b>Radno vreme:</b>  Pon-Pet: 7:30 - 16:30h | Sub: 7:30 - 14:30h
                </div>

                <div>
                    <div className="contact-title">
                        PIŠITE NAM
                    </div>
                    <div className="formData">
                        <form>
                             <div className="firstrow">
                                <div>
                                    <input type="text" className="firstrow-data" placeholder="Ime i prezime" name="fanlname"/>
                                </div>
                                <div>
                                    <input type="text" className="firstrow-data" placeholder="Broj telefona" name="phone"/>
                                </div>
                                <div>
                                    <input type="text" className="firstrow-data" placeholder="Email" name="email"/>
                                </div>
                             </div>
                             <div className="message-title">
                                <input type="text" className="message-title-input" placeholder="Naslov poruke" name="msgtitle"/>
                             </div>
                             <div className="text-area">
                                <textarea className="text-area-data">Tekst poruke...</textarea>
                             </div>
                             <div className="contactButton">
                                <button>Pošalji</button>
                             </div>
                            
                        </form>

                    </div>
                </div>
                    
            </div> */}
           <div className="layout">
                <div className="topContact"><h3>KONTAKT</h3></div>
                <div className="middle">
                    <div className="box">
                        <div className="flex-container-two-contact">
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: '#03fcad' }} /> 
                         </div>
                         <div className="flex-container-two-text-contact">
                            <p>Adresa:<br></br>Cara Lazara 35, 74480 Modriča, BIH</p>       
                        </div>
                        </div>
                        <div className="box">
                            <div className="flex-container-two-contact">
                                <FontAwesomeIcon icon={faPhone} style={{ color: '#03fcad' }} />
                            
                                </div>
                                <div className="flex-container-two-multi-contact">
                                    <div className="flex-container-two-text-multi-contact">
                                        <p>Tel:<br></br>053/820-891</p>
                                    </div>
                                                    
                                    <div className="flex-container-two-text-multi-contact">
                                       <p>Mob:<br></br>066-119-921</p>
                                    </div>
                                </div>
                        </div>
                        <div className="box">
                            <div className="flex-container-two-contact">
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#03fcad', fontSize: '16px' }} />
                            </div>
                            <div className="flex-container-two-text-contact">
                                 <p>Email:<br></br>prodexmd@yahoo.com</p> 
                             </div>
                        </div>
                    </div>
                <div className="bottom"><b>Radno vreme:</b>  Pon-Pet: 7:30 - 16:30h | Sub: 7:30 - 14:30h</div>
                <div className="formTitle"><h3>PIŠITE NAM</h3></div>
                
                    <div className="formMiddle">
                        <div className="formBox">
                            <input type="text" className="firstrow-data" placeholder="Ime i prezime" name="fanlname"/>
                        </div>
                        <div className="formBox">
                             <input type="text" className="firstrow-data" placeholder="Broj telefona" name="phone"/>
                        </div>
                        <div className="formBox">
                            <input type="text" className="firstrow-data" placeholder="Email" name="email"/> 
                        </div>
                    </div>
                    <div className="formMessageTitle">
                        <input type="text" className="message-title-input" placeholder="Naslov poruke" name="msgtitle"/>            
                    </div>
                    <div className="formMessageDescription"><textarea className="text-area-data">Tekst poruke...</textarea></div>
                    <div className="formMessageButton">
                                <button>Pošalji</button>
                    </div>
                

            </div>
            
         </>
         
    )
}