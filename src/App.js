import './scss/App.scss'
import Navbar from './layout/navbar/Navbar';
import RouteController from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


function App() {
  return (
    <SkeletonTheme>
    <Navbar/>
    <RouteController/>
    <ToastContainer limit={3}/>
    </SkeletonTheme>
  );
}

export default App;
