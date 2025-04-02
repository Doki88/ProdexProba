import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Main from "./common/Main"
// import BottomSlider from "./common/BottomSlider"
import "../styles/product.css"


export default function Product(){

    const params = useParams()
    const [product, setProduct] = useState({})
    const [features, setFeatures] = useState([])
    

    async function getProductDetails(){
         
        try {
            let response = await fetch("http://localhost:5000/api/products/" + params.id)
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
        <Main/>
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
                    
                     { product.price!== 0 &&
                          <p className="price">Cijena: {product.price} KM </p>
                     }
                      {product.price === 0 &&
                          <p className="priceRed">samo po narudžbi </p>
                     }
                        
                       
                     <p>Kataloški broj: {product.serialNumber}</p>
                     
                  
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