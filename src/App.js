import logo from './logo.svg';
import './App.css';
import Header from './component.Header';
import { Route, Router, Routes } from 'react-router-dom';
import MainNav from './component.MainNav';


function App() {
  return (
    <div className="App">
      <Header />
      <MainNav />

      
    </div>
  );
}

export default App;
