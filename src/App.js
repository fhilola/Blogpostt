import './scss/App.scss'
import Navbar from './layout/navbar/Navbar';
import RouteController from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <Navbar/>
    <RouteController/>
    <ToastContainer limit={3}/>
    </>
  );
}

export default App;
