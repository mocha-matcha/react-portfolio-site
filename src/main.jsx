import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'projects',
        element: <ProjectPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
