import './App.css';
import { Header } from './components/header/Header';
import {
  BrowserRouter as Router,
  Route,Routes
  
} from 'react-router-dom';
import { Home } from './components/home/Home';
import { Signup } from './components/signup/Signup';
import { Login } from './components/signup/Login';
import { Footer } from './components/footer/Footer';
function App() {
  return (
    <div className="App">
     <Router>
        <>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>} exact />
             
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              </Routes>
        <Footer/>
        </>
           </Router>
           
    </div>
  );
}

export default App;
