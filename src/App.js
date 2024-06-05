import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './components/Actions/User';
import { useEffect } from 'react';
import Home from './components/Home/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  const {isAuthenticated} = useSelector((state) => state.user);

  return (
    <Router>
      {
        isAuthenticated && <Header/>
      }

      <Routes>
        <Route path='/' element={isAuthenticated ? <Home/> : <Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
