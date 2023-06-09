import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './addProduct.css'
import './textHeader.css'
import './showProducts.css'

type Product = {
  name: string,
  detail: string,
  imageUrl: string,
  price: number
};

//----functions---//
export function ShowProduct() {
  const intialValues = [
    {
      name: "Pencil 2B (50/Pack)",
      detail: "Lead Hardness : 2B",
      imageUrl:
        "https://pim-cdn0.ofm.co.th/products/large/1004846.jpg",
      price: 169,
    },
    {
      name: "Copier Paper A3 80 gsm",
      detail: "Paper Thickness : 80 gsm ,Paper Size : 297 x 420 mm. (A3),500 sheets/ream",
      imageUrl:
        "https://pim-cdn0.ofm.co.th/products/large/5010470.jpg",
      price: 15,
    },
    {
      name: "Louis Printed Tape Pack With LoveBrown-Cream",
      detail: "For packaging work that wants to show love and care Brown letters with cream colored background, 3 inch tape core, Size 2 inches x 45 yards",
      imageUrl:
        "https://pim-cdn0.ofm.co.th/products/large/3090299.jpg",
      price: 56,
    },
  ]

  const [products, setProducts] = useState<Product[]>(intialValues);

  type Product = typeof initProd;
  const initProd = { name: '', detail: '', imageUrl: '', price: 0 };
  const [newProduct, setNewProduct] = useState<Product>(initProd);

  const handleAddProduct = () => {
    products.push(newProduct)
    console.log(newProduct)
    setNewProduct(initProd)
  };

  const deleteProduct = (index: number) => {
    setProducts((oldValues) => {
      const updatedProducts = [...oldValues];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
  };

  {/*Flag to show/close modal */}
  const [show, setShow] = useState(false);
  const [indexProduct,setIndexProduct] = useState<number>()

  const handleOpen = (index:number) => {
    setIndexProduct(index)
    setShow(true);
    if(show)
      console.log('open'+ 'index = '+indexProduct)
    else
      console.log('close')
  };
  const handleClose = () => {
    setShow(false)
    if(show)
      console.log('open'+ 'index = '+indexProduct)
    else
      console.log('close')
  };

  return (
    <>
      {/* <ShowDetail show= {true} /> */}

      {/*Add Product*/}
      <div className='card Add-container'>
        <h2> New Product </h2>
        <div className="row mb-3 ">
          <label className="col-sm-2 col-form-label ">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-sm" placeholder="product name" value={newProduct.name} onChange={event => { setNewProduct({ ...newProduct, name: event.target.value }) }} />
          </div>
          <label className="col-sm-2 col-form-label ">Detail</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-sm" placeholder="detail" value={newProduct.detail} onChange={event => { setNewProduct({ ...newProduct, detail: event.target.value }) }} />
          </div>
          <label className="col-sm-2 col-form-label">Image</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-sm" placeholder="image" value={newProduct.imageUrl} onChange={event => { setNewProduct({ ...newProduct, imageUrl: event.target.value }) }} />
          </div>
          <label className="col-sm-2 col-form-label" >Price</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-sm" placeholder="price" value={newProduct.price} onChange={event => { setNewProduct({ ...newProduct, price: Number(event.target.value) }) }} />
          </div>
        </div>
        <button type="button" className="btn btn-success btn-sm" onClick={() => handleAddProduct()} >
          Add
        </button>
      </div>
      
      {/*Show List of Products */}
      <div className='ListProducts-container'>
        <div className="container text-center" >
          <div className="row g-4">
            {products.map((product, index) => (
              <div className="col-sm-4" key={index}>
                <div className="card h-100 d-flex" >
                  <img src={product.imageUrl} className="card-img-top" alt="product image" />
                  <div className="card-body d-flex flex-column">
                    <button className="product-btn" onClick={()=> handleOpen(index)}><h5 className="card-title">{product.name}</h5></button>
                    <p className="card-text">price: {product.price}</p>
                    <div className="mt-auto">
                      <button type="button"
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </button>
                      <button type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteProduct(index)}>
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*show Detail*/}
      {show && indexProduct !== undefined && (
        <div className="overlay">
          <Modal size="lg" show={show} onHide={handleClose} >
            <Modal.Header closeButton >
              <Modal.Title>{products[indexProduct].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col xs={6}>
                  <img src={products[indexProduct].imageUrl} className="card-img-top" alt="product image" />
                </Col>
                <Col xs={6}>
                  <Table striped="columns">
                    <tbody>
                      <tr>
                        <th>Detail</th>
                        <td>{products[indexProduct].detail}</td>
                      </tr>
                      <tr>
                        <th>Price</th>
                        <td>{products[indexProduct].price}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}

export default ShowProduct;
