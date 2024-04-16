
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Dash2 from './components/Dash2';
import Navbar2 from './components/Navbar2';
import Home5 from './components/Home5';
import Home6 from './components/Home6';



function App() {
  return (
    <div className="App">
      {/* <Dash2/> */}
      {/* <Signup/> */}
      
      {/* <Navbar/>  */}
      {/* <Dashboard/> */}
      <Routes>
        {/* <Route path='/' element={<Navbar/>}/> */}
        <Route path='/' element={<><Dash2/><Home6/></>}/>
        
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      {/* <Route path='/' element={<Navbar2/>}/> */}
    </Routes>
    {/* <Navbar2/> */}
   {/* <Home5/> */}
     
    {/* <Login/> */}
     
    
     
    </div>
  );
}

export default App;
