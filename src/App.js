import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './componetns/Index';
import Login from './componetns/Login';
import Signup from './componetns/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
