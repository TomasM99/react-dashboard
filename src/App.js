import './App.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Hola soy la Home</div>}/>
        <Route path="/todolist" element={<div>Hola soy la To Do List</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
