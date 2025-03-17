import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../styles/navbar.css"
import { useState } from "react"

export default function Navbar() {

     const [searchValue, setSearchValue] = useState("")
   


    return <nav className="nav">
        <Link to="/" className="site-title">PRODEX</Link>
        <ul>
            <CustomLink to="/">POČETNA</CustomLink>
            <CustomLink to="/about">O NAMA</CustomLink>   
            <CustomLink to="/products">PROIZVODI</CustomLink>     
            <CustomLink to="/contact">KONTAKT</CustomLink>     
  
        </ul>

        <div className="search-container">
                 <input type="text" placeholder="Pretraga..." name="search" onChange={e => setSearchValue(e.target.value)} />
                 <Link to={"/filteredproducts/" } state={{ searchValue: searchValue }} className="linkbutton"   > 
                      <img src="/images/svg/loupe-svgrepo-com.svg" className="img-svg-loupe"  alt="..."/> 
                </Link>
               
          </div>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

function Ispis(input){
    console.log('evo searcha:' + input.searchValue)
}