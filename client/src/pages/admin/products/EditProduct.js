import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import FinderFilter from "../../../brandFilters/FinderFilter";
import NopalFilter from "../../../brandFilters/NopalFilter";
import TehnoinFilter from "../../../brandFilters/TehnoinFilter";
import AlingPrestigeFIlter from "../../../brandFilters/AlingPrestigeFIlter";
import AlingModularFilter from "../../../brandFilters/AlingModularFilter";
import RezervniGrijaciFilter from "../../../brandFilters/RezervniGrijaciFilter";

export default function EditProduct(){

 
    const params = useParams()

    const [initialData, setInitialData] = useState()

    const [validationErrors, setValidationErrors] = useState({})

    const [productId, setProductId] = useState()

    const{userCredentials, setUserCredentials } = useContext(AppContext)

    const navigate = useNavigate()

    function getProduct(){

        setProductId(params.id)
        //fetch("http://localhost:5000/api/products/" + params.id)
        fetch("https://prodexproba.onrender.com/api/products/" + params.id)
            .then(response => {
                if(response.ok){
                    return response.json()
                }

                throw new Error()
            })
            .then(data => {
                

                setInitialData(data)
            })
            .catch(error => {
                alert("Unable to read the product details")
            })
    }

    useEffect(getProduct, [])

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)
        const product = Object.fromEntries(formData.entries())
        product.brand = initialData.brand
        product.category = initialData.category
        product.id = productId

         

        if(!product.name || !product.price 
           ){
                alert("Molimo vas da popunite sva obavezna polja!!!")
                return
        }

        

    // PUT request using fetch with error handling
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({product})
    };

    //   fetch("http://localhost:5000/api/products/", requestOptions)
     fetch("https://prodexproba.onrender.com/api/products/", requestOptions)
        .then(async response => {
            const data = await response.json();
             

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                //return Promise.reject(error);
            }
            navigate("/admin/products")
            //setPostId(data.id);
        })
        .catch(error => {
            //setErrorMessage(error);
            console.error('There was an error!', error);
        });

            
    }

    function handleCategoryFilter(event){
        
        let category = event.target.value
        //setFilterParams({...filterParams, category: category})
      }


    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text-center mb-5">Edit Product</h2>
                    {/* <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">ID</label>
                            <div className="col-sm-8">
                                <input readOnly name="id" className="form-control-plaintext" defaultValue={params.id}></input>
                            </div>
                    </div> */}
                    {
                    initialData && 
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Naziv</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="name" defaultValue={initialData.name}></input>
                                <span className="text-danger">{validationErrors.name}</span>
                            </div>

                        </div>

                        <div className="row mb-3" >
                            <label className="col-sm-4 col-form-label">Katalog</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="brand" defaultValue={initialData.brand} disabled/>
                                <span className="text-danger">{validationErrors.brand}</span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Kategorija</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="brand" defaultValue={initialData.category} disabled/>    
                                {/* { initialData.brand === "Finder" &&
                                    <FinderFilter handleCategoryFilter={handleCategoryFilter}/>
                                }
                                { initialData.brand === "Nopal" &&
                                    <NopalFilter handleCategoryFilter={handleCategoryFilter}/>
                                }
                                { initialData.brand === "Tehnoin" &&
                                    <TehnoinFilter handleCategoryFilter={handleCategoryFilter}/>
                                }     
                                { initialData.brand === "Aling Conel-prestige" &&
                                    <AlingPrestigeFIlter handleCategoryFilter={handleCategoryFilter}/>
                                }   
                                { initialData.brand === "Aling Conel-modular" &&
                                    <AlingModularFilter handleCategoryFilter={handleCategoryFilter}/>
                                }  
                                { initialData.brand === "Rezervni dijelovi-grijaci" &&
                                    <RezervniGrijaciFilter handleCategoryFilter={handleCategoryFilter}/>
                                }    */}
                                <span className="text-danger">{validationErrors.category}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Cijena</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="price" type="number" step="0.01" min="1"
                                    defaultValue={initialData.price}/>
                                <span className="text-danger">{validationErrors.price}</span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Opis</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" rows="4" defaultValue={initialData.description}/>
                                <span className="text-danger">{validationErrors.description}</span>
                            </div>
                        </div>                 

                        <div className="row mb-3">
                            <div className="offeset-sm-4 col-sm-8">
                                <img src={initialData.image1}
                                    width="150" alt="..."/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Image</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="file" name="image"/>
                                <span className="text-danger">{validationErrors.image}</span>
                            </div>
                        </div>

                        {/* <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Created At</label>
                            <div className="offeset-sm-4 col-sm-8">
                                <input readOnly className="form-control-plaintext" 
                                    defaultValue={initialData.createdAt.slice(0,10)}/>
                            </div>
                        </div> */}

                        <div className="row">
                            <div className="offeset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">Sačuvaj</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to='/admin/products' role="button">Poništi</Link>
                            </div>
                        </div>
                    </form>
                    }
                </div>
            </div> 
        </div>
    )
}