import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux"
import store from './store/store'
import Layout from "./hocs/Layout"
import Register from "./containers/Register"
import Login from "./containers/Login"
import Home from "./containers/Home"
import Dashboard from "./containers/Dashboard"
import ProductDetail from './components/ProductDetail';
import Profile from "./containers/Profile"
import Checkout from './components/Checkout';
import UserCheckout from './components/UserCheckout';
import ConfirmUserCheckout from './components/ConfirmUserCheckout';
import './styles/App.css';

const App = () => {
  
  return (
    <div className='app'>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/dashboard/:id' element={<ProductDetail />}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/payment' element={<UserCheckout/>}/>
                <Route path='/confirm' element={<ConfirmUserCheckout/>}/>
              </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
