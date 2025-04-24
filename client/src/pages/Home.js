import { Link } from "react-router-dom"
import "../styles/home.css"
import Main from "./common/Main"
import Slideshow from "./common/Slideshow"
import BottomSlider from "./BottomSlider"
   

export default function Home(){

    
  
    return (
         <>
                <Slideshow/>
                 

                <div className="containernew">
                    <div className="titleHome">
                        <h1>ELEKTROMATERIJAL, SKLOPNA TEHNIKA
                            <br></br>I RELEJNA OPREMA
                        </h1>
                    </div>
                    <div className="brandbox-container"> 
                         
                            <div className="brandbox">
                                <img src="/images/brands/FINDER.png" className="img-finder" alt="hero"/>
                                <h3>FINDER ITALIJA</h3>
                                <p>DOO Prodex iz Modriče je direktni uvoznik za BIH releja
                                proizvodjača Finder iz Italije.<br></br><br></br>
                                U ponudi imamo: <br></br>
                                -Foto releji <br></br>
                                -Vremenski releji <br></br>
                                -Relej zvijezda trougao <br></br>
                                -Relej asimetrije faza <br></br>
                                -Relej za kontrolu nivoa <br></br>
                                -Slim relej <br></br>
                                -Releji serije 55.34 raznih napona <br></br>
                                -Releji serije 60.13 raznih napona <br></br>
                                -Releji serije 40.52 raznih napona <br></br>
                                -Releji serije 56.34 raznih napona <br></br>
                                -Postolje za releje        
                                    </p>
                                <Link   to={"/productscatalog/" } state={{ brand: "Finder" }} role="button" className="brands-button">Detaljnjije</Link> 
                                
                            </div>
                            <div className="brandbox">
                                <img src="/images/brands/ls-logo.jpg" className="img-ls" alt="hero"/>
                                <h3>LS INDUSTRIAL SYSTEM</h3>
                                <p>DOO Prodex iz Modriče je uvoznik brenda LS industrial<br></br> system
                                iz Južne Koreje.<br></br><br></br>
                            Kontaktori za upravljanje i uključenje električnih <br></br>
                            potrošača različitih upravljačkih napona. <br></br><br></br>
                            LSIS bimetali  - serija Metasol: Njihov dizajn <br></br>
                            demonstrira superiornu tehnologiju. <br></br><br></br>
                            LS Meta-MEC Motorna zaštitna sklopka pruža više <br></br>
                            efikasnosti kroz razne funkcije i kompaktan dizajn.
                                    </p>
                                <div className="buttonProba"><Link to={"/alingcatalog/" } role="button" className="brands-button">Detaljnjije</Link></div> 

                            
                        </div>
                        
                            <div className="brandbox">
                                <img src="/images/brands/aling-logo.png" className="img-aling" alt="hero"/>
                                <h3>ALING CONEL</h3>
                                <p>Širok asortiman proizvoda, modela i boja, pruža
                                vam <br></br>mogućnost za razne kombinacije koje će<br></br>
                                svaki zid učiniti lepšim. ALING-CONEL sklopke i <br></br>
                                priključnice dotatno oplemenjuje svaki prostor i <br></br>
                                pored upotrebne, imaju i dekorativnu funkciju. <br></br>
                                Jednostavnost forme predstavljena je u <br></br>
                                elegantnoj liniji PRESTIGE LINE. <br></br>
                                PRESTIGE LINE karakterišu visokokvalitetni<br></br>
                                materijali, jednostavna tehnička rešenja i <br></br>
                                izuzetno laka ugradnja. 
                                </p>
                                <Link   to={"/alingcatalog/" } state={{ brand: "Finder" }} role="button" className="brands-button">Detaljnjije</Link> 
                            </div>
                            <div className="brandbox">
                            <h2 className="rezDel">PRODEX</h2>
                            <h3>REZERVNI DIJELOVI</h3>
                                <p className="full-width-text">Preduzeće "PRODEX" d.o.o specijalizovano je za<br></br>
                                promet rezervnih dijelova za bijelu tehniku. 
                                Nekoliko godina u nazad smo lideri u toj oblasti 
                                u BIH. U našoj ponudi možete pronaći rezervne  
                                dijelove svih svijetskih proizvođača bijele  
                                tehnike kao što su Beko, Aristan, Gorenje, Askol,  
                                Ametek, Cebi, Ducati, Irca, Thermopower  
                                Thermowatt, Reco, SKF.
                                
                                
                                </p>
                                <Link   to={"/products/"  } role="button" className="brands-button">Detaljnjije</Link> 
                            
                        </div>
                </div>
                 
                </div>

                <BottomSlider  />

                                  
         </>
    )
}

 