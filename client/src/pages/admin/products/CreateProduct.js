import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext";

export default function CreateProduct(){

    const [validationErrors, setValidationErrors] = useState({})

    const {userCredentials, setUserCredentials } = useContext(AppContext)

    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)

        const product = Object.fromEntries(formData.entries())

        // if(!product.name || !product.brand || !product.category || !product.price ||
        //     !product.description || !product.image.name)
       
        if(!product.name || !product.brand || !product.category || !product.price ||
                !product.description){
                alert("Please fill all the fields!")
                return
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({product})
        };
        //fetch('http://localhost:5000/api/products', requestOptions)
        fetch('https://prodexproba.onrender.com/api/products', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    //return Promise.reject(error);
                }
                navigate("/admin/products")
                //this.setState({ postId: data.id })
            })
            .catch(error => {
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
            
    }

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
                            <label className="col-sm-4 col-form-label">Brend</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="brand"/>
                                <span className="text-danger">{validationErrors.brand}</span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Kategorija</label>
                            <div className="col-sm-8">
                                <select className="form-select" name="category">
                                    <option value='Other'>Drugo</option>
                                    <option value='prekidaci'>Prekidaci</option>
                                    <option value='uticnice'>Uticnice</option>
                                    <option value='releji'>Releji</option>
                                    <option value='Printers'>Printers</option>
                                    <option value='Cameras'>Cameras</option>
                                </select>
                                <span className="text-danger">{validationErrors.category}</span>
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
                                <input className="form-control" type="file" name="image"/>
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