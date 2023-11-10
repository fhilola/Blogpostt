import './Navbar.scss'
import { Container } from '../../utils'
import logo from '../../assets/image/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { useValue } from '../../context/AppProvider'
const EXCEPTION_ROUTES = ['/auth/login', '/auth/signup', '/admin']
const Navbar = ({type}) => {
    const [state, dispatch] = useValue()
    const token = localStorage.setItem("userData", JSON.stringify(state.info))
    console.log(token);
    // if(state.info){
    //     const userName = state.info.data.data.firstname
    //     const token = state.info.data.token
    //     console.log(userName);
    // }
    const {pathname} = useLocation()
    return !EXCEPTION_ROUTES.includes(pathname) && (
        <nav className='nav'>
            <Container>
                <div className="nav__wrapper">
                    <div className="nav__logo">
                        <img width={200} height={50} src={logo} alt="" />
                        <h1 className='nav__seo-title'>Medium</h1>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item"><NavLink end className={({isActive}) => isActive ? 'nav__link nav__link--active' : 'nav__link'} to='/'>Home</NavLink></li>
                        <li className="nav__item"><NavLink end className={({isActive}) => isActive ? 'nav__link nav__link--active' : 'nav__link'} to='/membership'>Membership</NavLink></li>
                        <li className="nav__item"><NavLink end className={({isActive}) => isActive ? 'nav__link nav__link--active' : 'nav__link'} to='articles'>Articles</NavLink></li>
                        <li className="nav__item"><NavLink end className={({isActive}) => isActive ? 'nav__link nav__link--active' : 'nav__link'} to='auth/login'>Login</NavLink></li>
                        {/* {
                            state.info.data.token ? <strong>{state.info.data.data.firstname}</strong> : <li><NavLink to='auth/login'></NavLink></li>
                        } */}
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar