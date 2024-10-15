import {Link} from "react-router-dom"

function Layout() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home page</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
        </nav>
        
    )
    
}
export default Layout