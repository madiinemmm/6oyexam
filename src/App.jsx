import { Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'


import './App.css'

function App() {


  return (
<>

<Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/products" element={<Products></Products>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>  
    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
   </Routes>
</>
  )
}

export default App
