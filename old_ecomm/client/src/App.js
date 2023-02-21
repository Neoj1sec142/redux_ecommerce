import React from 'react'
import {connect} from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Layout from './utils/Layout';
import Authpage from './containers/Authpage'
import Logout from './components/base/Logout';
import Dashboard from './containers/Dashboard';
import Browsing from './containers/Browsing';
import ProductDetail from './components/browsing/ProductDetail';
import CartContainer from './components/cart/CartContainer';
import Checkout from './containers/Checkout';
import Err404 from './components/base/Err404';
import PurchaseDetail from './components/cart/PurchaseDetail';



const App = ({isAuthenticated, current_user}) => {
  
  return (
    <div className="App">
      <Layout>
        {isAuthenticated ? <CartContainer /> : null}
        <Routes>
          {/* Main Base Routes */}
          <Route path='/' element={<Browsing />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='/product/:id' element={<ProductDetail />}/>
          {/* Protected Routes */}
          <Route path='/checkout' element={isAuthenticated ? <Checkout /> : <Authpage />}/>
          <Route path='/purchase/:id' element={isAuthenticated ? <PurchaseDetail /> : <Authpage />}/>
          <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Authpage />} />
          <Route path="*" element={<Err404 />} />
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