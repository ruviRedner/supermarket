import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import MyCart from './pages/MyCart/MyCart'
import ProductList from './components/ProductList/ProductList'
import Contact from './pages/contact/Contact'
import Pay from './pages/Pay/Pay'
import Admin from './pages/admin/Admin'

function App() {


  return (
    <div className='app'>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<div className='not-found'>404</div>} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<div>logout</div>} />
          <Route path='my-cart' element={<MyCart />} />
          <Route path='contact' element={<Contact />} />
          <Route path='admin' element={<Admin />} />
          <Route path='checkout' element={<Pay />} />
        </Routes>
      </Layout>

    </div>
  )
}

export default App;
