import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="product" element={<Product/>} />
        </Routes>
      </HelmetProvider>
    </div>
  );
}

export default App;
