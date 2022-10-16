import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
        
      <Layout>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          </Routes>
      </Layout>
          
  );
}

export default App;
