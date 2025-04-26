import "../styles/about.css"
import Main from "./common/Main"
import Slideshow from "./common/Slideshow"
import GallerySlider from "./GallerySlider"


export default function About(){
    return (
        <>
            <Slideshow/>
             {/* <div className="main-box">
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
               
            </div> */}
            {/* <div className="container">
            <div className="row">
                <div className="box">
                    <div className="text-box">
                        <h1 className="title">O NAMA</h1>
                        <p>Kompanija je u poslovno partnerskim relacijama sa velikim
                        brojem  firmi iz Bosne i Hercegovine.<br></br>
                        U cilju što boljeg plasmana našeg asortimana robe, prilikom 
                        prodaje nudimo stručne savjete kao i tehničku podršku.
                        </p>
                        <p>Širok asortiman elektromaterijala čine sve vrste kablova, elektro- 
                        instalacioni materijal za domaćinstvo, kancelarije i industriju, 
                        unutrašnja dekorativna rasvjeta za uređenje enterijera, rasvjeta 
                        za domaćinstvo, kancelarije, poslovne prostore.
                        </p>
                     </div>
                </div>
                <div className="box">
                    <div className="img-box">
                        <img src="/images/home/Colosseum_11-7-2003.jpg"
                            //  style ={{width:"70%", height:"70%"}}
                            alt="hero"/>  
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="box"> 
                     <img src="/images/home/Roma_Piazza_Venezia.jpg"
                             
                            alt="hero"/>  </div>
                <div className="box">
                    <div className="text-box-bottom">
                        <p>Veoma dobar kvalitet, reznovrsnost, uvijek dostupne količine i 
                        pristupačne cijene našeg asortimana robe, potvrđuju i veliki broj  
                        zadovoljnih kupaca i saradnika, sa kojima ostvarujemo jako dobru  
                        saradnju dugi niz godina, uz dobro razvijenu i organizovanu  
                        komercijalnu službu firme. Strukturu kupaca čini veliki broj  
                        veleprodaja, maloprodaja, tržnih centara, prodajnih trgovačkih  
                        lanaca, firmi za izvođenje elektro-instalacionih i građevinskih  
                        radova i mnogi drugi kupci širom Bosne i Hercegovine.</p>
                    </div>
                </div>
                
            </div>
            </div> */}
            <div className="grid-container">
                <div className="grid-item">
                     <div className="text-box">
                        <h1 className="title">O NAMA</h1>
                        <p>Kompanija je u poslovno partnerskim relacijama sa velikim
                        brojem  firmi iz Bosne i Hercegovine.<br></br>
                        U cilju što boljeg plasmana našeg asortimana robe, prilikom 
                        prodaje nudimo stručne savjete kao i tehničku podršku.
                        </p>
                        <p>Širok asortiman elektromaterijala čine sve vrste kablova, elektro- 
                        instalacioni materijal za domaćinstvo, kancelarije i industriju, 
                        unutrašnja dekorativna rasvjeta za uređenje enterijera, rasvjeta 
                        za domaćinstvo, kancelarije, poslovne prostore.
                        </p>
                     </div>
                </div>
                <div className="grid-item"> 
                    <img src="/images/home/Colosseum_11-7-2003.jpg"
                            alt="hero"/>  </div>
                <div className="grid-item">        
                    <img src="/images/home/Roma_Piazza_Venezia.jpg"  
                             alt="hero"/>
                </div>
                <div className="grid-item">
                     <p>Veoma dobar kvalitet, reznovrsnost, uvijek dostupne količine i 
                        pristupačne cijene našeg asortimana robe, potvrđuju i veliki broj  
                        zadovoljnih kupaca i saradnika, sa kojima ostvarujemo jako dobru  
                        saradnju dugi niz godina, uz dobro razvijenu i organizovanu  
                        komercijalnu službu firme. Strukturu kupaca čini veliki broj  
                        veleprodaja, maloprodaja, tržnih centara, prodajnih trgovačkih  
                        lanaca, firmi za izvođenje elektro-instalacionih i građevinskih  
                        radova i mnogi drugi kupci širom Bosne i Hercegovine.</p></div>
            </div>

            <div className="lowerTitle"><h1>GALERIJA</h1></div>

            <GallerySlider/>


            <div className="box-containerLower">
                <div className="boxLower"> <img src="/images/home/Colosseum_11-7-2003.jpg"
                            alt="hero"/>  </div>
                <div className="boxLower"> <img src="/images/home/Colosseum_11-7-2003.jpg"
                            alt="hero"/>  </div>
                <div className="boxLower"> <img src="/images/home/Colosseum_11-7-2003.jpg"
                            alt="hero"/>  </div>
                <div className="boxLower"> <img src="/images/home/Colosseum_11-7-2003.jpg"
                            alt="hero"/>  </div>
                 </div>
         </>
        
    )
}