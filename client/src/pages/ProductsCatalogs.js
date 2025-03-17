import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Main from "./common/Main"
// import BottomSlider from "./common/BottomSlider"
import "../styles/productcatalog.css"

export default function ProductsCatalogs(){

    const catalogs = [
        {
            image: "/images/catalogs/71ulHp3GU7L._AC_UF894,1000_QL80_.jpg",
            title: "Opta - Programmable Logic Relay",
            brand: ""
        },
        {
            image:  "/images/catalogs/20240111144001083.jpg",
            title: "Industrijska napajanja Meanwell",
            brand: ""
        },
        {
            image:  "/images/catalogs/Finder-Panel-Mount-and-Power-Relays-Stylized-Photo.png", 
            title: "Finder Italija-relejna oprema",
            brand: "Finder"
        },
        {
            image:  "/images/catalogs/lselectric.png",
            title: "Opta - Programmable Logic Relay",
            brand: ""
        },
        {
            image: "/images/catalogs/sklopkaJednopolnaAling.png",
            title: "Nopal",
            brand: "Nopal"
        },
        {
            image: "/images/catalogs/sklopkaJednopolnaAling.png",
            title: "Aling Conel",
            brand: "Aling Conel"
        }
    ]

    return (
         <>
             
            <Main/>

            <div className="products-main-box">
                <div>
                 

                    <div className="products-container">
                       {
                            
                            catalogs.map((catalog, index) => {
                                return (
                                    <div className="product-container" key={index}>
                                        <ProductItem catalog={catalog}/>
                                     </div>
                                )
                            })
                            
                       }
                    </div>       
                </div>

            </div>
            {/* <BottomSlider/> */}
         </>
    )
}

function ProductItem({catalog}){
    return(
        <div className="product-item">
            
           
             
            <hr />
            <Link to={"/productscatalog/" } state={{ brand: catalog.brand }} role="button" > <img src={catalog.image}
                className="img-fluid" alt="..."
                style={{height: "220px", objectFit:"contain"}}/>  </Link>
            <Link to={"/productscatalog/" }  state={{ brand: catalog.brand }} role="button" > 
                <p className="linktext">{catalog.title}</p>
             </Link>
            
             
             
            
            {/* <Link to={"/products/" + product._id} role="button" className="details-btn">Detaljnjije</Link> */}
        </div>
    )

}