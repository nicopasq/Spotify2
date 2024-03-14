import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Search from './components/Search';
import Profile from './components/Profile';

function App() {

  return (
    <div id='app'> 
    <Layout/>
      <Routes>
        <Route index element={<Profile/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
