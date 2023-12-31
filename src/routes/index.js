import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Article from '../pages/article/Article'
import Admin from '../pages/admin/Admin'
import Create from './sub-routes/create/Create'
import Articles from './sub-routes/articles/Articles'
import Auth from '../pages/auth/Auth'
import Login from './sub-routes/login/Login'
import Signup from './sub-routes/signup/Signup'
import Private from './private/Private'
import Main from './sub-routes/main/Main'

const RouteController = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='article/:id' element={<Article />} />
            <Route path='auth' element={<Auth />}>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Route>
            <Route path='admin' element={<Private />}>
                <Route path='' element={<Admin />} />
                <Route path='create' element={<Create />} />
                <Route path='articles' element={<Articles />} />
                <Route path='main' element={<Main />} />
            </Route>
        </Routes>
    )
}
export default RouteController