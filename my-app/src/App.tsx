import { useState } from 'react';
import products from './data';
import {Add} from './AddComp';
import {ShowProduct} from './ShowProduct';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <>
      <h1>PRODUCTS</h1>
      <Add />
      <ShowProduct />
    </>
  );
}

export default App;
