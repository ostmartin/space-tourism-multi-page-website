import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as destinationsLoader } from './features/destination/Destination';

import {
  MainPage,
  Home,
  Destination,
  Crew,
  Technology
} from './features';

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
        element: <Destination/>,
        loader: destinationsLoader
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
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>
);