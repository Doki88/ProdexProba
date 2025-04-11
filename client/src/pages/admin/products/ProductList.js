import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext";

export default function ProductList(){

    
    const [products, setProducts] = useState([])
    const {userCredentials, setUserCredentials} = useContext(AppContext)
    const navigate = useNavigate()

    //pagination functionality
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const pageSize = 30

    //search functionality
    const [search, setSearch] = useState("")

    // sort functionality
    const [sortColumn, setSortColumn] = useState({column: "id", orderBy: "desc"})

    function getProducts(){
       
        //let url =  `http://localhost:5000/api/products/${currentPage}/${pageSize}/${sortColumn.column}/${sortColumn.orderBy}`
         
        let url =  `http://localhost:5000/api/products/${currentPage}/${pageSize}`

        if(search) {
            url =  url + `/${search}`
        } 

        // let url = "http://localhost:4000/products?_page=" + currentPage + "&_limit=" + pageSize
        //     + "&q=" + search + "&_sort=" + sortColumn.column + "&_order=" + sortColumn.orderBy
        //console.log("url=" + url)
        fetch(url)
        .then(response => {
            if(response.ok){
                let totalCount = response.headers.get('X-Total-Count')
                // console.log("X-Total-Count:" + totalCount)
                let pages = Math.ceil(totalCount / pageSize)
                // console.log("Total Pages:" + pages)
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

    useEffect(getProducts, [currentPage, search, sortColumn])

    function deleteProduct(id) { 
        fetch( `http://localhost:5000/api/products/${id}`, { method: 'DELETE' })
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                //return Promise.reject(error);
            }
            getProducts()
            //setStatus('Delete successful');
        })
        .catch(error => {
            //setErrorMessage(error);
            console.error('There was an error!', error);
        });
        
    }

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

    //search funcitionality
    function handleSearch(event){
        event.preventDefault()

        
        let text = event.target.search.value
        setSearch(text)
        setCurrentPage(1)

    }

    // sort functionality
    function sortTable(column){
        let orderBy = "desc"

        if(column === sortColumn.column){
            // reverse orderBy
            if(sortColumn.orderBy === "asc") orderBy = "desc"
            else orderBy = "asc"
        }

        setSortColumn({column: column, orderBy: orderBy})
    }
    return(
        <div className="container my-4">
            <h2 className="text-center mb-4">Proizvodi</h2>

            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/admin/products/create" role="button">Dodaj novi proizvod</Link>
                    <button type="button" className="btn btn-outline-primary"
                        onClick={getProducts}>Refresh</button>
                </div>
                <div className="col">
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" name="search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

            </div>

            <table className="table">
                <thead>
                    <tr>
                        {/* <th style={{ cursor: "pointer"}} onClick={() => sortTable("id")}>
                            ID <SortArrow column ="id" sortColumn={sortColumn.column} orderBy={sortColumn.orderBy}/>
                        </th> */}
                        <th style={{ cursor: "pointer"}} onClick={() => sortTable("name")}>
                            Naziv <SortArrow column ="name" sortColumn={sortColumn.column} orderBy={sortColumn.orderBy}/>
                        </th>
                        <th style={{ cursor: "pointer"}} onClick={() => sortTable("brand")}>
                            Proizvođač <SortArrow column ="brand" sortColumn={sortColumn.column} orderBy={sortColumn.orderBy}/>
                        </th>
                        <th style={{ cursor: "pointer"}} onClick={() => sortTable("category")}>
                            Kategorija <SortArrow column ="category" sortColumn={sortColumn.column} orderBy={sortColumn.orderBy}/>
                        </th>
                        <th style={{ cursor: "pointer"}} onClick={() => sortTable("price")}>
                            Cena <SortArrow column ="price" sortColumn={sortColumn.column} orderBy={sortColumn.orderBy}/>
                        </th>
                        {/* <th >
                            Image
                        </th>
                        <th style={{ cursor: "pointer"}} onClick={() => sortTable("createdAt")}>
                            Created At <SortArrow column ="createdAt" sortColumn={sortColumn.column} orderBy={sortColumn.orderBy}/>
                        </th> */}
                        {/* <th style={{ cursor: "pointer"}}>
                            Action
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    {/* <td>{product._id}</td> */}
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}$</td>
                                    {/* <td><img src={product.image1}
                                        width="100" alt="..."/></td>  */}
                                    {/* <td>{product.createdAt.slice(0, 10)}</td> */}
                                    <td style={{width: "10px", whiteSpace: "nowrap"}}>
                                        <Link className="btn btn-primary btn-sm me-1"
                                            to={"/admin/products/edit/" + product._id }>Izmeni</Link>
                                        <button type="button" className="btn btn-danger btn-sm"
                                            onClick={() => deleteProduct(product._id)}>Obrisi</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

            <ul className="pagination">{pagintationButtons}</ul>

        </div>
    )
}

function SortArrow({column, sortColumn, orderBy}) {
    if (column !== sortColumn) return null

    if(orderBy === "asc"){
        return <i className="bi bi-arrow-up"></i>
    }
    
    return <i className="bi bi-arrow-down"></i>
}