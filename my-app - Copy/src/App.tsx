import { useState } from 'react';
import products from './data';
import Add from './AddComp';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { showModal } from './ModelProduct';
// import { Value } from 'sass';


export function Edit() {
  return (
    <>
      <button type="button" className="btn btn-primary">
        Edit
      </button>
    </>
  );
}

export function ShowProduct() {
  const [products_del, setProd_del] = useState(products)

  const deleteByValue = value => {
    setProd_del(oldValues => {
      return oldValues.filter(prod => prod != value)
    });
    console.log(products_del)
  }

  const ShowProd = products_del.map((aprod, index) => (
    <div className="container">
      <div className="card" style={{width: "10rem;"}}  key={index} >
        <img src={aprod.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{aprod.name}</h5>
          <p className="card-text">{aprod.price}</p>
          <Edit />

          <button type="button"
            className="btn btn-danger"
            onClick={() => deleteByValue(aprod)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      {ShowProd}
    </div>
  );
}

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