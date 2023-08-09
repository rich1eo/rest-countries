import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Countries from './pages/Countries';
import Country from './pages/Country';

import { countriesLoader } from './loaders/countriesLoader';
import { countryLoader } from './loaders/countryLoader';
import { DarkModeProvider } from './context/DarkModeContext';

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
        path: '/country/:countryName',
        element: <Country />,
        loader: countryLoader,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </>
  );
}
