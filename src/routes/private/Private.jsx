import { Navigate, Outlet } from 'react-router-dom';
import { useValue} from '../../context/AppProvider'

const Private = () => {
    const [state] = useValue()
    console.log(state);
  return !state.info.token ? <Navigate to={'/auth/login'}/> : <Outlet/>
}

export default Private