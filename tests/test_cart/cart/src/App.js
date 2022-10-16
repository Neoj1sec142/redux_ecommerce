import Main from './pages/main'
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
