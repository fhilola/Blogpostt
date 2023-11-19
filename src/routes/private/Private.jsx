import { Navigate, Outlet} from 'react-router-dom';
import { useValue} from '../../context/AppProvider'
import Admin from '../../pages/admin/Admin';
import Sidebar from '../../layout/sidebar/Sidebar';
import AdminContainer from '../admin-container/AdminContainer';

const Private = () => {
    const [state] = useValue()
    console.log(state);
  return !state.info.token ? <Navigate to={'/auth/login'}/> : <AdminContainer/>
}

export default Private