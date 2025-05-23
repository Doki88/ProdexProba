import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Main from "./common/Main"
// import BottomSlider from "./common/BottomSlider"
import "../styles/product.css"
import Slideshow from "./common/Slideshow"


export default function Product(){

    const params = useParams()
    const [product, setProduct] = useState({})
    const [features, setFeatures] = useState([])
    

    async function getProductDetails(){
         
        try {
            let response = await fetch("http://localhost:5000/api/products/" + params.id)
            // let response = await fetch("https://prodexproba.onrender.com/api/products/" + params.id)
            let data = await response.json()

            if(response.ok){
              
                setProduct(data)

                if(data.description)
                  {
                    const description1= data.description 
                    const proba = description1.split(';')
                    setFeatures(proba)
                    console.log(proba[0])
                  }
                  
                 
                console.log('evo em')
              
             }
            else{
                alert("Unable to get the product details")
            }
        } catch (error) {
            alert("Unable to connect to the server")
        }

    }

    useEffect(() => {
        getProductDetails()
    }, [])

    return (
        <>
        <Slideshow/>
          <div className="mainContainer">
            <div className="upperContainer">
                <div className="imageContainer1">
                    
                    {product.image1 &&
                         <img src={product.image1}
                    
                         style={{width: "220px"}}
                         alt="..."
                         />   
                    }     
                </div>
                <div className="titleContainer">
                     <h3>{product.name}</h3>

                     
                    
                     { product.price!== 0 && product.description === "pometru" &&  product.price !== -1 &&
                     
                          <p className="price">Cijena: {product.price} KM/1m </p>
                     }
                     { product.price!== 0 && product.description !== "pometru" && product.price !== -1 &&
                        <p className="price">Cijena: {product.price} KM </p>
                     }
                    {product.price === 0 &&
                          <p className="priceRed">samo po narudžbi </p>
                     }  
                     {product.price === -1 &&
                          <p className="priceRed">cijena po upitu </p>
                     }    

                     { product.brand === "Rezervni dijelovi-grijaci" && product.catalogNumber &&
                     
                            <div>
                                 <p>Prodex šifra: {product.serialNumber}</p>
                                 <p>Kataloški broj: {product.catalogNumber}</p>
                            </div>
                             
                     } 
                      { product.brand === "Rezervni dijelovi-grijaci" && !product.catalogNumber &&
                     
                            <div>
                                <p>Šifra: {product.serialNumber}</p>
                                
                            </div>
                      
                     }         
                       
                    { product.brand !== "Rezervni dijelovi-grijaci"  &&
                        <p>Kataloški broj: {product.serialNumber}</p>
                    }
                     
                  
                </div>
                {product.image2 &&
                <div className="imageContainer2">
                    
                         <img src={product.image2}
                         style={{width: "220px"}}
                         alt="..."
                         />   
                        
                </div>
                }
            </div>    
            <div className="descriptionContainer">
                <div className="descriptionTitle">
                    Opis
                </div>
                <div className="features">
                        {
                            features.map((feature, index) => {
                                return (
                                    <div key={index}>
                                         <FeatureItem feature={feature}/>
                                         
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

function FeatureItem({feature}){
    if(feature.startsWith("opiscrveno")){
        const proba = feature.split(':')
        
        feature = proba[1]
        return(
       
            <div className="featureRed">
                -{feature}
             </div>
        )
    }
    return(
       
        <div >
            -{feature}
         </div>
    )

}