import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">PRODEX</Link>
        <ul>
            <CustomLink to="/">POČETNA</CustomLink>
            <CustomLink to="/about">O NAMA</CustomLink>   
            <CustomLink to="/products">PROIZVODI</CustomLink>     
            <CustomLink to="/contact">KONTAKT</CustomLink>     
  
        </ul>

        <div className="search-container">
            <form action="/action_page.php">
                <input type="text" placeholder="Pretraga..." name="search"/>
                <button><img src="/images/svg/loupe-svgrepo-com.svg" className="img-svg-loupe"  alt="..."/></button>
            </form>
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