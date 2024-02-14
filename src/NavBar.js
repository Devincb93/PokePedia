
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div className="nav-bar">
            
            <NavLink className="nav-bar-a" to="/">Home</NavLink>
            <NavLink className="nav-bar-b" to="/PokemonPage">Pokemon</NavLink>
            <NavLink className="nav-bar-c" to="/About">About</NavLink>
            <NavLink className="nav-bar-d" to="/ReadMe">Sources</NavLink>
            
            
        </div>

    )
}
export default NavBar;