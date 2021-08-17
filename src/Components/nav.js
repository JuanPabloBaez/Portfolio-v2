import {Link} from "react-router-dom";
import Logo from '../images/logo110x100_jp.png'
import './nav.css'

const Nav = () => {
    return(
        <div className="nav-bar">    
            
            <div className="link-panel">
                <Link to="/video" className="nav-button">video </Link>
                <Link to="/web" className="nav-button">web </Link>
                <Link to="/" className="logo"><img src={Logo} alt="logo" /></Link>
                <Link to="/image" className="nav-button">image </Link>
                <Link to="/board" className="nav-button">board </Link>
                
            </div>
        </div>
    )
}

export default Nav;