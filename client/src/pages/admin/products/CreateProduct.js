import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import FinderFilter from "../../../brandFilters/FinderFilter";
import NopalFilter from "../../../brandFilters/NopalFilter";
import TehnoinFilter from "../../../brandFilters/TehnoinFilter";
import AlingPrestigeFIlter from "../../../brandFilters/AlingPrestigeFIlter";
import AlingModularFilter from "../../../brandFilters/AlingModularFilter";
import RezervniGrijaciFilter from "../../../brandFilters/RezervniGrijaciFilter";
import axios from "axios";
import RezervniVesMasinaFIlter from "../../../brandFilters/RezervniVesMasinaFIlter";

export default function CreateProduct(){

    const [validationErrors, setValidationErrors] = useState({})
    const [catalog, setCatalog] = useState("")
    const [category, setCategory] = useState("")
    const [file, setFile] = useState(null);


    const {userCredentials, setUserCredentials } = useContext(AppContext)

    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)

        const product = Object.fromEntries(formData.entries())   

        const formNew = new FormData();
        formNew.append("image", file);
        formNew.append("name", product.name);
        formNew.append("brand", catalog);
        formNew.append("category", category);
        formNew.append("price", product.price);
        formNew.append("description", product.description);
        formNew.append("serialNumber", product.serialNumber);
        formNew.append("imagename", product.image.name);



        // if(!product.name || !product.brand || !product.category || !product.price ||
        //     !product.description || !product.image.name)
       
        if(!product.name || ! catalog || !category || !product.price ||
                !product.serialNumber ){
                alert("Molimo vas da popunite sva obavezna polja!!!")
                return
        }

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     // body: JSON.stringify({product})
        //     body: formData
        // };
        // fetch('http://localhost:5000/api/products', requestOptions)
        // // fetch('https://prodexproba.onrender.com/api/products', requestOptions)
        //     .then(async response => {
        //         const isJson = response.headers.get('content-type')?.includes('application/json');
        //         const data = isJson && await response.json();

        //         // check for error response
        //         if (!response.ok) {
        //             // get error message from body or default to response status
        //             const error = (data && data.message) || response.status;
        //             //return Promise.reject(error);
        //         }
        //         navigate("/admin/products")
        //         //this.setState({ postId: data.id })
        //     })
        //     .catch(error => {
        //         //this.setState({ errorMessage: error.toString() });
        //         console.error('There was an error!', error);
        //     });

        

      
        try {
            const response = await axios.post('https://prodexproba.onrender.com/api/upload', formNew, {
            // const response = await axios.post('http://localhost:5000/api/upload', formNew, {

              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            //navigate("/admin/products")
            alert('Dodali ste prozivod: ' + product.name)
            //console.log('Upload successful:', response.data);
          } catch (error) {
            console.error('Upload failed:', error);
          }
        
            
    }

    function handleCategory(event){
        let catalog = event.target.value
        setCatalog(catalog)
         
     }

     function handleCategoryFilter(event){
        let category = event.target.value

        setCategory(category)
        
     }

     const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };

    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text-center mb-5">Kreiraj novi prozivod</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Naziv</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="name"></input>
                                <span className="text-danger">{validationErrors.name}</span>
                            </div>

                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Kataloški broj</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="serialNumber"></input>
                                <span className="text-danger">{validationErrors.serialNumber}</span>
                            </div>

                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Katalog</label>
                            <div className="col-sm-8">
                                <select className="form-select" name="category" onChange={handleCategory}>
                                    <option value='Finder'>Finder</option>
                                    <option value='Nopal'>Nopal</option>
                                    <option value='Tehnoin'>Tehnoin</option>
                                    <option value='Aling Conel-prestige'>Aling Conel-prestige</option>
                                    <option value='Aling Conel-modular'>Aling Conel-modular</option>
                                    <option value='Rezervni dijelovi-grijaci'>Rezervni dijelovi-grijaci</option>
                                    <option value='Rezervni dijelovi-vesmasine'>Rezervni dijelovi-vesmasine</option>

                                </select>
                                <span className="text-danger">{validationErrors.category}</span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Kategorija</label>
                               <div className="col-sm-8">
                                    { catalog === "Finder" &&
                                            <FinderFilter handleCategoryFilter={handleCategoryFilter}/>
                                    }
                                    { catalog === "Nopal" &&
                                            <NopalFilter handleCategoryFilter={handleCategoryFilter}/>
                                    }
                                    { catalog === "Tehnoin" &&
                                            <TehnoinFilter handleCategoryFilter={handleCategoryFilter}/>
                                    }     
                                    { catalog === "Aling Conel-prestige" &&
                                            <AlingPrestigeFIlter handleCategoryFilter={handleCategoryFilter}/>
                                    }   
                                    { catalog === "Aling Conel-modular" &&
                                            <AlingModularFilter handleCategoryFilter={handleCategoryFilter}/>
                                    }  
                                    { catalog === "Rezervni dijelovi-grijaci" &&
                                            <RezervniGrijaciFilter handleCategoryFilter={handleCategoryFilter}/>
                                    }   
                                    { catalog === "Rezervni dijelovi-vesmasine" &&
                                            <RezervniVesMasinaFIlter handleCategoryFilter={handleCategoryFilter}/>
                                    }     
                                </div>                       
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Cijena</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="price" type="number" step="0.01" min="1"/>
                                <span className="text-danger">{validationErrors.price}</span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Opis</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" rows="4"/>
                                <span className="text-danger">{validationErrors.description}</span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Slika</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="file" name="image" onChange={handleFileChange} />
                                <span className="text-danger">{validationErrors.image}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offeset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">Sačuvaj</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to='/admin/products' role="button">Ponisti</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}