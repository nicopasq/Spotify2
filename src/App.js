import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Search from './components/pages/Search';

function App() {

  return (
    <div id='app'> 
    <Layout/>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
