//import logo from './logo.svg';
import './App.css';
//import Navbar from './Components/Navbar';
import Home from './Screen/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
  

}from "react-router-dom";
import Login from './Screen/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Screen/Signup.jsx';
import { CartProvider } from './Components/ContextReducer.jsx';

function App() {
  return (
    <CartProvider>
 <Router>
       <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/creatuser" element={<Signup/>}/>
        </Routes>
       </div>
    </Router>
    </CartProvider>
   
  );
}

export default App;
