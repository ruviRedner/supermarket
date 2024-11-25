import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import MyCart from "./pages/MyCart/MyCart";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./pages/contact/Contact";
import Pay from "./pages/Pay/Pay";
import io from "socket.io-client";
import GuardComponent from "./components/GuardComponent/GuardComponent";
import Admin from "./pages/admin/Admin";
import Logout from "./components/Logout/Logout";
import Profile from "./pages/Profile/Profile";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import { checkAuth } from "./redux/slices/userSlice";
export const socket = io("http://localhost:3000");
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const autoLogin = async () => {await dispatch(checkAuth())}
    autoLogin()
  })
  return (
    <div className="app">
      <Layout>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='*' element={<div className='not-found'>404</div>} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='my-cart' element={<GuardComponent children={<MyCart />} />} />
          <Route path='contact' element={<Contact />} />
          <Route path='checkout' element={<GuardComponent children={<Pay />} />} />
          <Route path='category/:category' element={<Home />} />
          <Route path='my-profile' element={<Profile />} />
          <Route path="admin" element={<Admin/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
