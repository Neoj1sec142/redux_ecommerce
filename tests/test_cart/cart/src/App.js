import Main from './pages/main'
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store/store'
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Cart />
      <div className='app'>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
      </div>
    </Provider>
  );
}

export default App;
