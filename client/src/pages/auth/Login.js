import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";

export default function Login(){

     
    const navigate = useNavigate()
    const { userCredentials, setUserCredentials } = useContext(AppContext)

    console.log(userCredentials)

    // if(userCredentials){
    //     return <Navigate to="/"/>
    // }

    async function handleSubmit(event){

        event.preventDefault()

        let username = event.target.username.value
        let password = event.target.password.value

        if(!username || !password){
            alert("Please fill the login form")
            return
        }
        
        const credentials = {username, password}

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({credentials})
        };
          fetch('http://localhost:5000/api/users/login', requestOptions)
        // fetch('https://prodexproba.onrender.com/api/users/login', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    //return Promise.reject(error);
                }
                 
                
                setUserCredentials(data)
                navigate("/admin/products")
                //this.setState({ postId: data.id })
            })
            .catch(error => {
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }
    return (
        <div className="container my-4">
            <div className="mx-auto rounded border p-4" style={{width: "400px"}}>
                <h2 className="text-center mb-5">Uloguj se</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Korisnicko ime</label>
                        <input className="form-control" name="username"></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="password" name="password"></input>
                    </div>

                    <div className="row">
                        <div className="col d-grid">
                            <button type="submit" className="btn btn-primary">Uloguj se </button>
                        </div>
                        {/* <div className="col d-grid">
                            <Link className="btn btn-outline-primary" to="/" role="button">Ponisti</Link>
                        </div> */}
                    </div>

                </form>
            </div>
        </div>
    )
}