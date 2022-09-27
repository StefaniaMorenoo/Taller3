import ho from "./hhb.svg"
import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar() {

    return(
        <header>
            <div className="logo">
                <img src={ho} />
            </div>

            <nav>
            <Link to="/" className="menu-item">Inicio</Link>
            <Link to="/habitaciones" className="menu-item">Habitaciones</Link>
            <Link to="/habitaciones/1" className="menu-item">Habitacion</Link>

            <Link to="/login" className="btn-azul">
                <i class="fa-solid fa-user"></i>
                Iniciar Sesión</Link>
            </nav>

        </header>
    );
    
}
export default Navbar;