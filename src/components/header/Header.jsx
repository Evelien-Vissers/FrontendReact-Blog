import './Header.css'
import { Link } from 'react-router-dom';
import logomedium from '../../assets/logo-medium.png'


const Header = () => {
    return (
        <header>
            <nav>
                <img src={logomedium} alt="Company logo"/>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/allposts">Alle posts</Link>
                    </li>
                    <li>
                        <Link to="/newposts">Nieuwe post maken</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;