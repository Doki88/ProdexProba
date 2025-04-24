// import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import "../styles/navbar.css"
// import { useState } from "react"

// export default function Navbar() {

//      const [searchValue, setSearchValue] = useState("")
   


//     return <nav className="nav">
//         <Link to="/" className="site-title">PRODEX</Link>
//         <div className="nav-menu">
             
//                <div><CustomLink className="navbar-elements" to="/">POČETNA</CustomLink></div> 
//                <div><CustomLink className="navbar-elements" to="/about">O NAMA</CustomLink></div>   
//                <div><CustomLink className="navbar-elements" to="/products">PROIZVODI</CustomLink></div>     
//                <div><CustomLink className="navbar-elements" to="/contact">KONTAKT</CustomLink></div>     
    
             
//         </div>
//         <div className="icon">
//             <Link   onClick={myFunction}>
//                  <i className="fa fa-bars"></i>
//             </Link>
//         </div>
      
//         {/* <div className="search-container">
//                  <input type="text" placeholder="Pretraga..." name="search" onChange={e => setSearchValue(e.target.value)} />
//                  <Link to={"/filteredproducts/" } state={{ searchValue: searchValue }} className="linkbutton"   > 
//                       <img src="/images/svg/loupe-svgrepo-com.svg" className="img-svg-loupe"  alt="..."/> 
//                 </Link>
               
//           </div> */}
//            <div className="search-box">
//       <input type="text" placeholder="Search..." />
//       <span className="search-icon">&#128269;</span> {/* Unicode magnifying glass */}
//     </div>
//     </nav>
// }

// function CustomLink({to, children, ...props}) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({path: resolvedPath.pathname, end: true})
//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }

// function myFunction(){
   
//     const elements = document.getElementsByClassName('nav-menu');
//     const searchElements = document.getElementsByClassName('search-container');
    
//     var navMenu = elements[0]
//     var searchContainer = searchElements[0]
  
//     if (navMenu.className === "nav-menu") {
//         navMenu.className += " responsive";
//     } else {
//         navMenu.className = "nav-menu";
//     }

//     if (searchContainer.className === "search-container") {
//         searchContainer.className += " responsive";
//     } else {
//         searchContainer.className = "search-container";
//     }

    
// }

 

 


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import "../styles/navbar.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [searchValue, setSearchValue] = useState("")

  return (
    <header className="header">
      {/* Mobile Top Row */}
      <div className="mobile-header">
        <h1 className="mobile-title">PRODEX</h1>
        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Main Header Content */}
      <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
        {/* Search bar (left on desktop) */}
        <div className="search">
          <input type="text" placeholder="Pretraga..." onChange={e => setSearchValue(e.target.value)}/>
          <Link to={"/filteredproducts/" } state={{ searchValue: searchValue }} className="search-icon">
            <FaSearch />
          </Link>
        </div>

        {/* <input type="text" placeholder="Pretraga..." name="search" onChange={e => setSearchValue(e.target.value)} />
                   <Link to={"/filteredproducts/" } state={{ searchValue: searchValue }} className="linkbutton"   > 
                        <img src="/images/svg/loupe-svgrepo-com.svg" className="img-svg-loupe"  alt="..."/> 
                 </Link> */}
               

        {/* Navbar (centered on desktop) */}
        <nav className="navbar">
          <Link to="/">POČETNA</Link>
          <Link to="/about">O NAMA</Link>
          <Link  to="/products">PROIZVODI</Link>
          <Link  to="/contact">KONTAKT</Link>
        </nav>
    
        {/* Title (right on desktop) */}
        <h1 className="desktop-title">PRODEX</h1>
      </div>
    </header>
  );
};

export default Header;

 