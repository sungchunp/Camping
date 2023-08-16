import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import MainSlide from './component/MainSlide';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import MainNavbar from './component/MainNavbar';
import Detail from './component/Detail';
import Cart from './component/Cart';
import TentTarp from './component/TentTarp';


const URL = 'https://raw.githubusercontent.com/sungchunp/camping.json/main/data';

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
          <Route path='/detail/:id' element={<Detail camping={camping} axios={axios} />} />
          <Route path='/cart' element={<Cart camping={camping} />} />
          <Route path='/tenttarp' element={<TentTarp camping={camping} /> } />
          <Route path='*' element={<div>Page Not found</div>} />
        </Routes>
      </Suspense>






    </div>
  );
}

export default App;
