import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
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

  {/* set initial value */ }
  const [products, setProducts] = useState<Product[]>(intialValues);

  {/*set varible for Addding new Product*/ }
  const initProd = { name: '', detail: '', imageUrl: '', price: 0 };
  const [newProduct, setNewProduct] = useState<Product>(initProd);

  {/*Flag to show/close modal */ }
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState(false);
  const [indexProduct, setIndexProduct] = useState<number>()

  {/*set Duplicate Products for Edit a product */ }
  const [dupProducts, setDupProducts] = useState<Product>(initProd);

  {/*default image */}
  const defaultImage = 'https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder-300x300.png';

  const handleAddProduct = () => {
    if (newProduct.imageUrl == '') {
      newProduct.imageUrl = defaultImage;
    }
    if (newProduct.name == '' ){
      alert('Please enter name product')
    }
    else{
      products.push(newProduct)
      console.log(newProduct)
      setNewProduct(initProd)
    }
  };

  const deleteProduct = (index: number) => {
    setProducts((oldValues) => {
      const updatedProducts = [...oldValues];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
  };

  const handleOpen = (index: number) => {
    setIndexProduct(index)
    setShow(true);
    if (show) {
      setShow(true)
      console.log('open index = ' + indexProduct)
    }
  };
  const handleClose = () => {
    setShow(false)
    console.log('close index = ' + indexProduct)
  };

  const handleEdit = (value: Product) => {
    setDupProducts(value)
    console.log(value)
  }
  const handleSave = () => {
    if (dupProducts.imageUrl == '')
      dupProducts.imageUrl = defaultImage

    if(dupProducts.name ==''){
      alert('Please enter name product')
    }
    else{
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[indexProduct as number] = dupProducts;
        return updatedProducts;
      });
      setShow(false);
    }
  }

  return (
    <>
      {/*Add Product*/}
      <div className='card Add-container'>
        <h2> New Product </h2>
        <div className="row mb-3 ">
          <label className="col-sm-2 col-form-label ">Name</label>
          <div className="col-sm-10">
            <input required type="text" className="form-control form-control-sm" placeholder="product name" value={newProduct.name} onChange={event => { setNewProduct({ ...newProduct, name: event.target.value }) }} />
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
                    <button className="product-btn" onClick={() => { handleOpen(index), setDetail(true) }}><h5 className="card-title">{product.name}</h5></button>
                    <p className="card-text">price: {product.price}</p>
                    <div className="mt-auto">
                      <button type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => { handleOpen(index), setDetail(false), handleEdit(products[index]) }}
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


      {/*Edit Product */}
      {show && (!detail) && indexProduct !== undefined && (
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
                  <Form>
                    <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="2">
                        Name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required
                          type="text"
                          autoFocus
                          value={dupProducts.name}
                          onChange={event => { setDupProducts({ ...dupProducts, name: event.target.value }) }}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="2">
                        Detail
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          autoFocus
                          value={dupProducts.detail}
                          onChange={event => { setDupProducts({ ...dupProducts, detail: event.target.value }) }}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="2">
                        Image Url
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          autoFocus
                          value={dupProducts.imageUrl}
                          onChange={event => { setDupProducts({ ...dupProducts, imageUrl: event.target.value }) }}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="2">
                        Price
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          autoFocus
                          value={dupProducts.price}
                          onChange={event => { setDupProducts({ ...dupProducts, price: Number(event.target.value) }) }}
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancle
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

      {/*show Detail*/}
      {show && detail && indexProduct !== undefined && (
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
