import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AppContext } from './AppContext';
 
import Home from "./pages/Home";
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';
// import About from './pages/About';
// import Pricing from './pages/Pricing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import { Footer, Navbar } from './components/layout';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ProductList from './pages/admin/products/ProductList';
// import CreateProduct from './pages/admin/products/CreateProduct';
// import { AdminRoute, AuthenticatedUserRoute } from './components/authorization';
// import Login from './pages/auth/Login';
// import EditProduct from './pages/admin/products/EditProduct';
// import ProductDetails from './pages/admin/products/ProductDetails';
import Products from './pages/Products';
// import "./styles.css"
// import Product from './pages/Product';


function App(){

  // function getStoredCredentials(){

  //   console.log('Evo kredencijala:')
  //   let data = localStorage.getItem("credentials")

  //   console.log(data)

  //   if(data){
  //     let json = JSON.parse(data)
  //     return json
  //   }
  //   return null
  // }

  // const [userCredentials, setUserCredentials] = useState(getStoredCredentials())

  // useEffect(() => {
 
  //   let str = JSON.stringify(userCredentials)
  //   localStorage.setItem("credentials", str)
  // }, [userCredentials])


  return(
    <AppContext.Provider>
      
         <BrowserRouter>  
             
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/* <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/pricing" element={<Pricing/>}></Route>
                    <Route path="/about" element={<About/>}></Route>*/}
                    <Route path="/products" element={<Products/>}></Route> 



                    {/* <Route path="/admin/products" element={<ProductList/>}/> */}
                    {/* <Route path="/admin/products/create" element={<AdminRoute><CreateProduct/></AdminRoute>}/> */}
                    {/* <Route path="/admin/products/edit/:id" element={<AdminRoute><EditProduct/></AdminRoute>}/> */}
                   {/* <Route path="/admin/products/edit/:id" element={ <EditProduct/>  }/>  */}

                    
 
                </Routes>  
               
        </BrowserRouter>
    </AppContext.Provider>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 