import {Link} from "react-router-dom";
import Logo from '../images/logo-white.svg'


const Nav = () => {
    return(
        <div className="nav-bar">    
            
            <div className="link-panel">
            <Link to="/web" className="nav-button nav-web">web </Link>
                <Link to="/video" className="nav-button nav-video">video </Link>               
                <Link to="/" className="logo"><img  src={Logo} alt="logo" /></Link>
                <Link to="/image" className="nav-button nav-image">image </Link>
                <Link to="/board" className="nav-button nav-board">board </Link>
                
            </div>
        </div>
    )
}

export default Nav;