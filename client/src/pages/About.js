import "../styles/about.css"
import Main from "./common/Main"
import Slideshow from "./common/Slideshow"


export default function About(){
    return (
        <>
            <Slideshow/>
             <div className="main-box">
                <div className="inner-box">
                    <div className="text-box">
                        <h1 className="title">O NAMA</h1>
                        <p>Kompanija je u poslovno partnerskim relacijama sa velikim <br></br>
                        brojem  firmi iz Bosne i Hercegovine.<br></br>
                        U cilju što boljeg plasmana našeg asortimana robe, prilikom <br></br>
                        prodaje nudimo stručne savjete kao i tehničku podršku.
                        </p>
                        <p>Širok asortiman elektromaterijala čine sve vrste kablova, elektro- <br></br>
                        instalacioni materijal za domaćinstvo, kancelarije i industriju, <br></br>
                        unutrašnja dekorativna rasvjeta za uređenje enterijera, rasvjeta <br></br>
                        za domaćinstvo, kancelarije, poslovne prostore.
                        </p>
                    </div>
                    <div className="img-box">
                        <img src="/images/home/Colosseum_11-7-2003.jpg"
                            //  style ={{width:"70%", height:"70%"}}
                            alt="hero"/>  
                    </div>
                
                </div>
                <div div className="inner-box">
                    <div className="img-box">
                        <img src="/images/home/Roma_Piazza_Venezia.jpg"
                            //  style ={{width:"70%", height:"70%"}}
                            alt="hero"/>  
                    </div>
                    <div className="text-box-bottom">
                        <p>Veoma dobar kvalitet, reznovrsnost, uvijek dostupne količine i<br></br>
                        pristupačne cijene našeg asortimana robe, potvrđuju i veliki broj <br></br>
                        zadovoljnih kupaca i saradnika, sa kojima ostvarujemo jako dobru <br></br>
                        saradnju dugi niz godina, uz dobro razvijenu i organizovanu <br></br>
                        komercijalnu službu firme. Strukturu kupaca čini veliki broj <br></br>
                        veleprodaja, maloprodaja, tržnih centara, prodajnih trgovačkih <br></br>
                        lanaca, firmi za izvođenje elektro-instalacionih i građevinskih <br></br>
                        radova i mnogi drugi kupci širom Bosne i Hercegovine.</p>
                    </div>
                    
                </div>
                <div className="galery">

                    <div className="gallery-upper">
                        <h1 className="title">GALERIJA</h1>
                        
                        
                        <div className="galery-slider">
                         </div>
                    </div>
                    <div className="gallery-bottom">
                        <img src="/images/home/Roma_Piazza_Venezia.jpg"
                             className="galery-img"   alt="hero"/> 
                        <img src="/images/home/Roma_Piazza_Venezia.jpg"
                           className="galery-img" alt="hero"/>  
                        <img src="/images/home/Roma_Piazza_Venezia.jpg"
                            className="galery-img" alt="hero"/>   
                        <img src="/images/home/Roma_Piazza_Venezia.jpg"
                            className="galery-img" alt="hero"/>   
                    </div>
                   
                    
                </div>
               
            </div>
         </>
        
    )
}