import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
 
 

export default function Products(){

    const [products, setProducts] = useState([])

     const [currentPage, setCurrentPage] = useState(1)
     const [totalPages, setTotalPages] = useState(1)
     const pageSize = 8

     const [filterParams, setFilterParams] = useState({brand:"", category:""})

     const [sortColumn, setSortColumn] = useState({column: "id", orderBy: "desc"})

    // search functionality
    const [searchValue, setSearchValue] = useState("")

    function getProducts(){

        console.log('evo me tu sam')
       
         
       let url =  `http://localhost:5000/api/products`

        

        if(searchValue){
           
            url = url + searchValue
         }

       
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
            alert("Unable to get the data i ovo jos novo")
            console.log('evo greske') 
            console.log(error.stack)
            alert(error.stack)
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
            
            

            <div className="products-main-box">
                <div>
                    <div className="title-filters-box">
                        <div>
                            <h4 className="title-products">PROIZVODI</h4>
                        </div>
                        
                        <div className="brand-filters">
                            <div className="brand-filter">
                                <select onChange={handleBrandFilter}>
                                    <option value="">Svi brendovi</option>
                                    <option value="Nopal">Nopal</option>
                                    <option value="Aling Conel">Aling Conel</option>
                                    <option value="Finder">Finder</option>
                                    <option value="HP">HP</option>
                                </select>
                            </div>
                            <div className="brand-filter">
                                <select onChange={handleCategoryFilter}>
                                    <option value="">Sve kategorije</option>
                                    <option value="prekidaci">Prekidaci</option>
                                    <option value="uticnice">Uticnice</option>
                                    <option value="releji">Releji</option>
                                    <option value="sijalicnaGrla">Sijalicna grla</option>  
                                    <option value="utikaci">Utikaci</option>  
                                    <option value="Others">Drugo</option>  
                                </select>
                            </div>
                        </div>
                       
                       
                    </div>

                    <div className="products-container">
                       {
                            products.map((product, index) => {
                                return (
                                    <div className="product-container" key={index}>
                                        <ProductItem product={product}/>
                                     </div>
                                )
                            })
                       }
                    </div>

                    <ul className="pagination">{pagintationButtons}</ul>

                  
                </div>

            </div>
            
         </>
    )
}

function ProductItem({product}){
    return(
        <div className="product-item">
            <h4>{product.name}</h4>   
            <img src={product.images[0]}
                className="img-fluid" alt="..."
                style={{height: "220px", objectFit:"contain"}}/>   
            <hr />
             
            <p>
                {/* Brand: {product.brand}, Category: {product.category} <br/> */}
                {/* {product.description.substr(0, 50) + "..."} */}
            </p>     
            <h4>{product.price}KM</h4>  
            <Link to={"/products/" + product._id} role="button" className="details-btn">Detaljnjije</Link>
        </div>
    )

}