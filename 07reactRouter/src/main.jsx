import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // ✅ This line was missing

import './index.css';
import App from './App.jsx';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
// this is one way of doing routing in react:
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//        {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]);


// this is another way of doing routing in react: this is easier to read and understand
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />    
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
