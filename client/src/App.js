import { Route, Routes } from 'react-router-dom';
import Main from './pages/main'
import './styles/App.css';

const App = () => {
  return (
    <div>
      <header>
        
      </header>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
