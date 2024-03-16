import './App.css';
import { Route, Routes, useNavigate } from 'react-router';
import Layout from './Layout';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Search from './components/pages/Search';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispath = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3001')
    .then(r => {
      if (r.ok){
        r.json().then(data => {
          if (data.access_token){
            navigate('/profile')
            dispath({type:'tokenData/setTokenData', payload: data})
          } 
        })
      }
    })
  }, [])


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
