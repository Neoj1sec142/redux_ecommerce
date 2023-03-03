import React from 'react'
import {connect} from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Layout from './utils/Layout';
import Authpage from './containers/Authpage'
import Logout from './components/base/Logout';
import Dashboard from './containers/Dashboard';
import BrowsePage from './containers/BrowsePage';
import ProductDetail from './components/broswing/ProductDetail';
// import Checkout from './containers/Checkout';
import Err404 from './components/base/Err404';
import ViewCart from './components/checkout/ViewCart';
import NewProduct from './components/admin/NewProduct';
import Err401 from './components/base/Err401';
import PostCheckout from './components/checkout/PostCheckout';
import Checkout from './components/checkout/Checkout';
import ViewOrders from './components/admin/ViewOrders';

const App = ({isAuthenticated, current_user}) => {
  
  return (
    <div className="App">
      <Layout>
        <Routes>
          {/* Main Base Routes */}
          <Route path='/' element={<BrowsePage />}/>
          <Route path='/product/:id' element={<ProductDetail />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path="*" element={<Err404 />} />
          {/* Protected Routes */}
          <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Authpage />} />
          <Route path='/view-cart' element={isAuthenticated ? <ViewCart /> : <Authpage />} />
          <Route path='/order-complete' element={isAuthenticated ? <PostCheckout /> : <Authpage />} />
          <Route path='/checkout' element={isAuthenticated ? <Checkout /> : <Authpage />} />
          {/* Protected Admin Routes */}
          <Route path='/admin-dash' element={(isAuthenticated && current_user.is_staff) ? <NewProduct /> : <Err401 />} />
          <Route path='/view-orders' element={(isAuthenticated && current_user.is_staff) ? <ViewOrders /> : <Authpage />} />
        </Routes>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {})(App);
