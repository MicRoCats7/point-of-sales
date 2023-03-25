import './App.css';
import Admin from './pages/admin';
import Kasir from './pages/kasir';
import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';
import AddData from './pages/addData';
import UpdateData from './pages/editData';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Kasir/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<AddData/>}/>
        <Route path='/updatedata/:id' element={<UpdateData/>}/>
      </Routes>
    </div>
  );
}

export default App;
