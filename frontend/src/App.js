
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <AllRoutes/>
     <div className='footer_div'>
     <Footer/>
     </div>
    </div>
  );
}

export default App;
