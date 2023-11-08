import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './features/mainPage/MainPage.jsx';
import Home from './features/home/Home.jsx';
import Crew from './features/crew/Crew.jsx';
import Destination from './features/destination/Destination.jsx';
import Technology from './features/technology/Technology.jsx';

import './main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'destination/:planetId',
        element: <Destination/>
      },
      {
        path: 'crew/:memberId',
        element: <Crew/>
      },
      {
        path: 'technology/:techId',
        element: <Technology/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);