import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Components/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MultiLanguage from './Components/Language/MultiLanguage';

function App() {
  
  return (
    <div >
      <NavigationBar/>
      <AllRoutes/>
      <ToastContainer position="top-center"/>
      {/* <MultiLanguage/> */}
    </div>
  );
}

export default App;
