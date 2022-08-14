import React from 'react'; 
import './App.css';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

export function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer />

    </div>
  );
}