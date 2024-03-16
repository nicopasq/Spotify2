import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import Layout from './Layout';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Search from './components/pages/Search';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispacth = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    fetch('http://localhost:3001')
    .then(r => {
      if (r.ok){
        r.json().then(data => {
          if (data.access_token){
            if (location.pathname === '/'){
              navigate('/profile')
            }
            dispacth({type:'tokenData/setTokenData', payload: data})
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
