import {useState} from 'react'
import './AddComp.css';
import './data';
import products from './data';

function Add() {
   type Product = typeof initProd;
   const initProd = {name:'',detail:'',imageUrl:'',price:10}
   const [newProduct, setNewProduct] = useState<Product>(initProd)

  //  const [newProd,setNewProd] = useState<{name:string,detail:string,imageUrl:string,price:number}>({name:"",detail:"",imageUrl:"",price:0})
   
   const AddProduct = ()=> {
    alert("add Prodcut "+ newProduct.name+' to List ')
    products.push(newProduct) 
   }
    return (
      <>
        <div className='Add-container'>
          <div className="row mb-3 ">
            <label className="col-sm-2 col-form-label col-form-label-sm">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="product name" value={newProduct.name} onChange={event => setNewProduct(event.target.value)} />
            </div>
            <label className="col-sm-2 col-form-label col-form-label-sm">Detail</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="detail" value={newProduct.detail} onChange={event => setNewProduct(event.target.value)} />
            </div>
            <label className="col-sm-2 col-form-label col-form-label-sm">Image</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="image"  value={newProduct.imageUrl} onChange={event => setNewProduct(event.target.value)} />
            </div>
          
            <label className="col-sm-2 col-form-label col-form-label-sm" >Price</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="price"  value={newProduct.price} onChange={event => setNewProduct(event.target.value)}/>
            </div>
          </div>
          <button type="button" className="btn btn-success btn-sm" onClick={()=>AddProduct()} >
            Add
          </button>
        </div>
      </>
    );
  }

  export default Add;