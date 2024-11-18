import CartWidget from './CartWidget';
import './navBar.css';
import { Link } from 'react-router-dom';

const categories = ['Color unico', 'Colores varios', 'Pintura total'];


const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>Mi Tienda</h1>
            </Link>            
            <ul className="nav-links">
                {categories.map((category) => (
                    <li key={category}> 
                        <Link to={`/category/${category.toLowerCase()}`}>
                            {category}
                        </Link>
                    </li>
                ))}
                <li><Link to="#contacto">Contacto</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar