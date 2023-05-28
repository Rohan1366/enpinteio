import {Route,Routes} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/Routes/Private';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Dashboard from './user/Dashboard';
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminRoute from './components/Routes/AdminRoute'
function App() {
  return (
   <>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route path='user' element={<Dashboard/>}/>
        </Route>

        <Route path='dashboard' element={<AdminRoute/>}>
          <Route path='admin' element={<AdminDashboard/>}/>
        </Route>
     </Routes>
      
   </>
  );
}

export default App;
