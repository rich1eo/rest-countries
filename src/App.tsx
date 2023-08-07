import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Countries from './pages/Countries';
import Country from './pages/Country';

import { countriesLoader } from './loaders/countriesLoader';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Countries />,
        loader: countriesLoader,
      },
      {
        path: '/country/:countryId',
        element: <Country />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
