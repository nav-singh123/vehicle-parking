import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx'; 
import BookParking from './components/User/BookParking.jsx'
import AdminDashboard from './components/Admin/AdminDashboard';

 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} /> 
      <Route path='parking' element={<BookParking />} />
      <Route path='admin/dashboard' element={<AdminDashboard />} /> {/* ✅ Add this */}


    </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
