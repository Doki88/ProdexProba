import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Main from "./common/Main"
// import BottomSlider from "./common/BottomSlider"
import "../styles/products.css"
import NopalFilter from "../brandFilters/NopalFilter"
import FinderFilter from "../brandFilters/FinderFilter"
import TehnoinFilter from "../brandFilters/TehnoinFilter"
import AlingPrestigeFIlter from "../brandFilters/AlingPrestigeFIlter"
import AlingModularFilter from "../brandFilters/AlingModularFilter"
import RezervniGrijaciFilter from "../brandFilters/RezervniGrijaciFilter"
import Slideshow from "./common/Slideshow"
import { FaSearch } from "react-icons/fa"
import BottomSlider from "./BottomSlider"

export default function Products(){

    const location = useLocation()
    const { brand } = location.state

    const [products, setProducts] = useState([])

     //pagination functionality
     const [currentPage, setCurrentPage] = useState(1)
     const [totalPages, setTotalPages] = useState(1)
     const pageSize = 16

     //filter functionality
     const [filterParams, setFilterParams] = useState({brand:"", category:""})

    // sort functionality
     const [sortColumn, setSortColumn] = useState({column: "id", orderBy: "desc"})

    // search functionality
    const [searchValue, setSearchValue] = useState("")

    function getProducts(){

        let url =  `http://localhost:5000/api/products/${currentPage}/${pageSize}/`
        // let url =  `https://prodexproba.onrender.com/api/products/${currentPage}/${pageSize}/`

        // let url =  `http://localhost:5000/api/products/`
        //let url =  `http://localhost:5000/api/products/${filterParams.brand}/${filterParams.category}`
        
        if(brand){
             url = url + `${brand}/`
         }
        if(filterParams.category){     
            
            url = url + `${filterParams.category}/`
        } else {
            url = url + 'all/'
        }

    //     if(filterParams.brand){
            
    //         url = url + `${filterParams.brand}/`
    //        //url = url + "&brand=" + filterParams.brand
             
    //    } 

        if(searchValue){
           
            url = url + searchValue
         }

          fetch(url)

        .then(response => {
            if(response.ok){
                console.log('U redu je sve ipak')
                 let totalCount = response.headers.get('X-Total-Count')
                let pages = Math.ceil(totalCount / pageSize)
                setTotalPages(pages)
                return response.json()
            }

            throw new Error()
        })
        .then(data => {
            console.log(data)

            setProducts(data.products)
            setCurrentPage(data.pagination.currentPage)
            setTotalPages(data.pagination.totalPages)
        })
        .catch(error => {
            alert("Unable to get the data"+error)
        })
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

    //filter functionality
    function handleBrandFilter(event){
       
        let brand = event.target.value
         
        setFilterParams({...filterParams, brand: brand})
        setCurrentPage(1)
    }

    function handleCategoryFilter(event){
        let category = event.target.value
        setFilterParams({...filterParams, category: category})
        setCurrentPage(1)
     }

    // sort functionality
    function handleSort(event){
        let val = event.target.value

        if(val === "0") setSortColumn({column: "id", orderBy: "desc"})
        else if(val === "1") setSortColumn({column: "price", orderBy: "asc"})
        else if(val === "2") setSortColumn({column: "price", orderBy: "desc"})
    }

    function handleSearch(event){
        const searchTerm = event.target.value;
        // do something with the search term (e.g. redirect to a search results page)
        //console.log(`Searching for "${searchTerm}"...`);
        setSearchValue(searchTerm)
        setCurrentPage(1)
    }
  
    return (
         <>
             
            <Slideshow/>

            {/* <div className="products-main-box">
                <div>
                    <div className="title-filters-box1">
                        <div>
                            <h4 className="title-products">PROIZVODI</h4>
                        </div>
                        
                        <div className="brand-filters1">
                            

                    { brand === "Finder" &&
                           <FinderFilter handleCategoryFilter={handleCategoryFilter}/>
                    }
                     { brand === "Nopal" &&
                           <NopalFilter handleCategoryFilter={handleCategoryFilter}/>
                     }
                    { brand === "Tehnoin" &&
                           <TehnoinFilter handleCategoryFilter={handleCategoryFilter}/>
                    }     
                    { brand === "Aling Conel-prestige" &&
                           <AlingPrestigeFIlter handleCategoryFilter={handleCategoryFilter}/>
                    }   
                    { brand === "Aling Conel-modular" &&
                           <AlingModularFilter handleCategoryFilter={handleCategoryFilter}/>
                    }  
                    { brand === "Rezervni dijelovi-grijaci" &&
                           <RezervniGrijaciFilter handleCategoryFilter={handleCategoryFilter}/>
                    }      
                           
                        </div>
                       
                        
                    <div className="searchInBrand">
                             <input type="text" placeholder="Pretraga..."  />
                             <Link to={"/filteredproducts/" } state={{ searchValue: searchValue }} className="search-icon">
                               <FaSearch />
                             </Link>
                    </div>
                    </div>

                   

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
             */}
             
             <div className="three-blocks-container">
                    <div className="block"> 
                        <div lassName="title-filters-box1">
                            <h4 className="title-products1">PROIZVODI</h4>
                        </div>
                    </div>
                    <div className="block"> 
                        <div className="searchInBrand">
                             <input type="text" placeholder="Pretraga..."  />
                             <Link to={"/filteredproducts/" } state={{ searchValue: searchValue }} className="search-icon">
                               <FaSearch />
                             </Link>
                        </div>
                    </div>
                    <div className="block">
                        
                      <div className="filterBlock">   
                           
                                { brand === "Finder" &&
                                    <FinderFilter handleCategoryFilter={handleCategoryFilter}/>
                                }
                                { brand === "Nopal" &&
                                    <NopalFilter handleCategoryFilter={handleCategoryFilter}/>
                                }
                                { brand === "Tehnoin" &&
                                    <TehnoinFilter handleCategoryFilter={handleCategoryFilter}/>
                                }     
                                { brand === "Aling Conel-prestige" &&
                                    <AlingPrestigeFIlter handleCategoryFilter={handleCategoryFilter}/>
                                }   
                                { brand === "Aling Conel-modular" &&
                                    <AlingModularFilter handleCategoryFilter={handleCategoryFilter}/>
                                }  
                                { brand === "Rezervni dijelovi-grijaci" &&
                                    <RezervniGrijaciFilter handleCategoryFilter={handleCategoryFilter}/>
                                }      
                                   
                         </div>
                    </div>
                </div>

                
                <div className="product-grid">
                        {products.map((product, index) => (
                            <div className="product-card" key={index}>
                                 <ProductItem product={product}/>
                            </div>
                        ))}
                 </div>
                 <ul className="pagination">{pagintationButtons}</ul>
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
             
            <p>
                {/* Brand: {product.brand}, Category: {product.category} <br/> */}
                {/* {product.description.substr(0, 50) + "..."} */}
            </p>     
           
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