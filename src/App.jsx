import React, { Children } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import Cart from "./pages/cart/Cart";
import Mystate from './context/data/myState';
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <Mystate>
      <Router>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order/>
              </ProtectedRoutes>
        } />
          <Route path="cart" element={<Cart/>}/>
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard/>
            </ProtectedRoutesForAdmin>
          } />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Nopage/>} />
          <Route path="/productInfo/:id" element={<ProductInfo/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/updateproduct" element={<UpdateProduct/>} />
      
       </Routes>
       <ToastContainer/>
     </Router>
    </Mystate>
     
  )
}

export default App


export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'harley@gmail.com' ){
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}