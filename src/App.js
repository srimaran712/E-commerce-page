import {BrowserRouter, Routes, Route,NavLink,Router} from 'react-router-dom'
import HeaderOne from './components/HeaderOne'
import HeaderTwo from './components/HeaderTwo'
import HomePage from './pages/Homepage'
import WomenPage from './pages/WomenPage'
import ProductPage from './pages/ProductPage'
import BoyPage from './pages/BoyPage'
import GirlsPage from './pages/GirlsPage'

function App() {
  return (
    <>
                   
   
    <BrowserRouter>
    <HeaderOne/>
    <HeaderTwo/>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="category/:items" element={<WomenPage/>}/>
      <Route path="products/:items.id" element={<ProductPage/>}/>
      

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
