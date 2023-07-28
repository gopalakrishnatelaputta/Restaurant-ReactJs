import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom' 
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Menu from './components/pages/Menu'
import PageNotFound from './components/pages/PageNotFound';
import Cart1 from '../src/components/pages/Cart1'




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="cart" element={<Cart1/>}/>
          
          
          
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
