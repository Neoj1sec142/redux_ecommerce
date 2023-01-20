import React from 'react'
import {connect} from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Layout from './utils/Layout';
import Authpage from './containers/Authpage'
import Logout from './components/base/Logout';
import Dashboard from './containers/Dashboard';
import Browsing from './containers/Browsing';



const App = ({isAuthenticated, current_user}) => {
  
  return (
    <div className="App" >
      <Layout>
        <Routes>
          {/* Main Base Routes */}
          <Route path='/logout' element={<Logout />}/>
          <Route path='/' element={<Browsing />}/>
          {/* Protected Routes */}
          <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Authpage />} />
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