import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Layout from "./hocs/Layout"
import Home from "./containers/Home"
import Register from "./containers/Register"
import Login from "./containers/Login"
import Dashboard from "./containers/Dashboard"
import Profile from "./containers/Profile"
import { Provider } from "react-redux"
import store from './store/store'
import './styles/App.css';

const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/profile' element={<Profile/>}/>
              </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
          
  );
}

export default App;
