import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <div className="nav-bar">    
            <Link to="/" className="logo">Portfolio</Link>
            <div className="link-panel">
                <Link to="/video">video </Link>/
                <Link to="/web">web </Link>/
                <Link to="/gallery">gallery </Link>/
                <Link to="/board">board </Link>/
                
            </div>
        </div>
    )
}

export default Nav;