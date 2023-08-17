import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './main/Header';
import Main from './main/Main';
import data from './campingData';
import Slide from './main/Slide';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';

import Detail from './component/Detail';
import Cart from './component/Cart';
import TentTarp from './kategorie/TentTarp';
import Store from './redux/store';
import Card from './component/Card';


const URL = 'https://raw.githubusercontent.com/sungchunp/camping.json/main/data.json';

function App() {
  const [camping, setcamping] = useState([]);

console.log(data);

  useEffect(() => {
    axios.get(URL)
      .then((result) => {
        setcamping([...result.data]);
        console.log(result);
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
          <Route path='/store' element={Store}/>
          <Route path='/card' element={Card}/>
          <Route path='*' element={<div>Page Not found</div>} />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
