//오류 찾아서 해결하기



import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './main/Header';
import Main from './main/Main';
import data from "./CampingData";
import Slide from './main/Slide';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';

import Detail from './component/Detail';
import Cart from './component/Cart';
import Store from './redux/store';
import Card from './component/Card';
import TentTarp from './Category/TentTarp';
import Table from './Category/Table';
import LoginSignup from './component/LoginSignup';
import Chair from './Category/Chair';
import Lamp from './Category/Lamp';
import Barzier from './Category/Brazier';
import Segoods from './Category/Segoods';
import Cookware from './Category/Cookware';
import Accessory from './Category/Accessory';


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
          <Route path='/' element={<Main camping={camping} setcamping={setcamping} />} />
          <Route path='/detail/:id' element={<Detail camping={camping} />} />
          <Route path='/cart' element={<Cart camping={camping} />} />
          <Route path='/tenttarp' element={<TentTarp camping={camping} /> } />
          <Route path='/table' element={<Table camping={camping} />}/>
          <Route path='/chair' element={<Chair camping={camping} />}/>
          <Route path='/lamp' element={<Lamp camping={camping} />}/>
          <Route path='/brazier' element={<Barzier camping={camping} />}/>
          <Route path='/segoods' element={<Segoods camping={camping} />}/>
          <Route path='/cookware' element={<Cookware camping={camping} />}/>
          <Route path='/accessory' element={<Accessory camping={camping} />}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/card' element={<Card camping={camping} />}/>
          <Route path='/LoginSingup' element={<LoginSignup />}/>
          <Route path='*' element={<div>Page Not found</div>} />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
