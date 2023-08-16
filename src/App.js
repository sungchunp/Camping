import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import MainSlide from './component/MainSlide';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import MainNavbar from './component/MainNavbar';





function App() {
  const [camping, setcamping] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((result) => {
        setcamping([...result.data]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div className="App">

      <Header />
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path='/' element={<Main camping={camping} setcamping={setcamping} axios={axios} useEffect={useEffect} />} />
         

        </Routes>
      </Suspense>






    </div>
  );
}

export default App;
