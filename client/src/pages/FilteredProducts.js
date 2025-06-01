import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Main from "./common/Main"
// import BottomSlider from "./common/BottomSlider"
import "../styles/products.css"
import NopalFilter from "../brandFilters/NopalFilter"
import Slideshow from "./common/Slideshow"

export default function FilteredProducts(){

    const location = useLocation()
    const { searchValue } = location.state

    console.log('searchValue:' + searchValue)

    const [products, setProducts] = useState([])

     //pagination functionality
     const [currentPage, setCurrentPage] = useState(1)
     const [totalPages, setTotalPages] = useState(1)
     const pageSize = 8

     //filter functionality
     const [filterParams, setFilterParams] = useState({brand:"", category:""})

    // search functionality
     

    function getProducts(){
       
        let url =  `http://localhost:5000/api/products/${currentPage}/${pageSize}/`
        //  let url =  `https://prodexproba.onrender.com/api/products/${currentPage}/${pageSize}/`
        
        if(filterParams.brand){
             url = url + `${filterParams.brand}/`
         } else {
            url = url + 'all/'
        }
        if(filterParams.category){     
            
            url = url + `${filterParams.category}/`
        } else {
            url = url + 'all/'
        }

        console.log("evo url: "+url)

        if(searchValue){
           
            url = url + searchValue

            fetch(url)

            .then(response => {
                if(response.ok){
                    let totalCount = response.headers.get('X-Total-Count')
                    let pages = Math.ceil(totalCount / pageSize)
                    setTotalPages(pages)
                    return response.json()
                }
    
                throw new Error()
            })
            .then(data => {
            
                setProducts(data.products)
                setCurrentPage(data.pagination.currentPage)
                setTotalPages(data.pagination.totalPages)
            })
            .catch(error => {
                alert("Unable to get the data")
            })
         }

        
    }

    useEffect(getProducts, [currentPage, filterParams, searchValue])

      // pagination functionlity
    let pagintationButtons = []
    for(let i = 1; i <= totalPages; i++){
          pagintationButtons.push(
              <li className={i === currentPage ? "page-item-active" : "page-item"}  key={i}>
              <a className="page-link" href={"?page=" + i} 
                  onClick={event => {
                      event.preventDefault()
  
                      setCurrentPage(i)
                  }}
               >{i}</a>
            </li>
          )
    }

    function handleSearch(event){
        const searchTerm = event.target.value;
        // do something with the search term (e.g. redirect to a search results page)
        //console.log(`Searching for "${searchTerm}"...`);
         
        setCurrentPage(1)
    }
  
    return (
         <>
             
            <Slideshow/>

            <div className="products-main-box">
                <div>
                    <div className="title-filters-box">
                        <div>
                            <h4 className="title-products">PROIZVODI</h4>
                        </div>
                      
                        
                    </div>

                    {/* <div className="products-container">
                       {
                            products.map((product, index) => {
                                return (
                                    <div className="product-container" key={index}>
                                        <ProductItem product={product}/>
                                     </div>
                                )
                            })
                       }
                    </div> */}
                    <div className="product-grid">
                        {products.map((product, index) => (
                            <div className="product-card" key={index}>
                                 <ProductItem product={product}/>
                            </div>
                        ))}
                     </div>

                    <ul className="pagination">{pagintationButtons}</ul>

                  
                </div>

            </div>
            {/* <BottomSlider/> */}
         </>
    )
}

function ProductItem({product}){
    return(
        <div className="product-item">
            <h4>{product.name}</h4>   
            <img src={product.image1}
                className="img-fluid" alt="..."
                style={{height: "220px", objectFit:"contain"}}/>   
            <hr />
            { product.description === "pometru" &&
                 <h4>{product.price}KM/1m</h4>           
            } 
             { product.description !== "pometru" && product.price !== 0 && product.price !== -1 &&
                 <h4>{product.price}KM</h4>           
            } 

            {product.price === 0 &&
                 <h4>{product.price}samo po narudžbi</h4>  
            }  
            {product.price === -1 &&
                 <h4 className="priceNegative">cijena po upitu</h4>  
            }    
            <Link to={"/products/" + product._id} role="button" className="details-btn">Detaljnjije</Link>
        </div>
    )

}