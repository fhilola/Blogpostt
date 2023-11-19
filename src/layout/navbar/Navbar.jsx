import './Navbar.scss'
import { Container } from '../../utils'
import logo from '../../assets/image/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { useValue } from '../../context/AppProvider'
import { useEffect, useState } from 'react'
import instance from '../../services/api'
const EXCEPTION_ROUTES = ['/auth/login', '/auth/signup', '/admin']
const Navbar = ({type}) => {
    const {pathname} = useLocation()
    const [state, dispatch] = useValue()
    const [userData, setUserData] = useState(null)
    useEffect(()=>{
        instance(`/api/users/${state.info.user_id}`, {
            headers: {
                'Authorization' : 'Bearer '
            }
        })
        .then(response => setUserData(response.data.data))
        .catch(err => console.log(err))
    },[userData])
    // console.log(userData);
    return pathname.includes("auth") || pathname.includes("admin") ? null : (
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
                        {
                            !userData ? 
                            <>
                            <li className="nav__item"><NavLink end className={({isActive}) => isActive ? 'nav__link nav__link--active' : 'nav__link'} to='auth/login'>Login</NavLink></li>
                        <li className="nav__item"><NavLink end className={({isActive}) => isActive  ? 'nav__link nav__link--active' : 'nav__link btn'} to='auth/signup'>Get Started</NavLink></li>
                            </>
                        :
                        <li className='nav__item'><NavLink className="nav__link" to="/admin">{userData.firstname}</NavLink></li>
                        }
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar