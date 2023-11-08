import './Navbar.scss'
import { Container } from '../../utils'
import logo from '../../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            <Container>
                <div className="nav__wrapper">
                    <div className="nav__logo">
                        <img width={200} height={50} src={logo} alt="" />
                        <h1 className='nav__seo-title'>Medium</h1>
                    </div>
                    <ul className="nav__link">
                        <li className="nav__item"><NavLink to='/'>Home</NavLink></li>
                        <li className="nav__item"><NavLink to='/membership'>Membership</NavLink></li>
                        <li className="nav__item"><NavLink to='articles'>Articles</NavLink></li>
                        <li className="nav__item"><NavLink to='auth/login'>Login</NavLink></li>
                        <li className="nav__item"><NavLink to='auth/signup'>Get Started</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar