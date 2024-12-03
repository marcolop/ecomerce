import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import { useContext } from 'react';
import  Home from '../Home';
import NotFound from '../NotFound';
import Signin from '../Signin/index';
import MyAccount from '../MyAccount/index';
import MyOrder from '../MyOrder/index';
import MyOrders from '../MyOrders/index';
import Navbar from '../../Components/Navbar';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/',element: <Home />},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/Singin', element: <Signin/>},
    {path: '/*', element:<NotFound/>}
  ])
  return routes
}
const App = () => {
  return (
    <>
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
    </>
  )
}

export default App;
