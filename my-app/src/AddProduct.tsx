// import { useState } from 'react'
// import Modal from 'react-bootstrap/Modal'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
// import {AddButton} from './ShowProduct';

// type Product = {
//     name: string,
//     detail: string,
//     imageUrl: string,
//     price: number
// };

// export default function AddProduct() {
//     {/*set varible for Addding new Product*/ }
//     const initProd = { name: '', detail: '', imageUrl: '', price: 0 };
//     const [newValue, setNewValue] = useState<Product>(initProd);

//     const defaultImage = 'https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder-300x300.png';

//     const [show, setShow] = useState(false)
//     const handleOpen = () => {
//         setShow(true)
//         console.log('close modal')
//     };
//     const handleClose = () => {
//         setShow(false)
//         console.log('close modal')
//     };

//     return (
//         <>
//              <Button variant="success" size="sm" onClick={()=> setShow(true)}>
//                 Add new product
//               </Button>
//             {show !== undefined && (
//                 <div className="overlay">
//                     <Modal size="lg" show={show} onHide={handleClose} >
//                         <Modal.Header closeButton >
//                             Add new Product
//                         </Modal.Header>
//                         <Modal.Body>
//                             <Row>
//                                 <Col xs={6}>
//                                     <img src={newValue.imageUrl ||defaultImage} className="card-img-top" alt="product image" />
//                                 </Col>
//                                 <Col xs={6}>
//                                     <Form>
//                                         <Form.Group as={Row} className="mb-3" >
//                                             <Form.Label column sm="2">
//                                                 Name
//                                             </Form.Label>
//                                             <Col sm="10">
//                                                 <Form.Control
//                                                     required
//                                                     type="text"
//                                                     autoFocus
//                                                     value={newValue.name}
//                                                     onChange={event => { setNewValue({ ...newValue, name: event.target.value }) }}
//                                                 />
//                                             </Col>
//                                         </Form.Group>
//                                         <Form.Group as={Row} className="mb-3" >
//                                             <Form.Label column sm="2">
//                                                 Detail
//                                             </Form.Label>
//                                             <Col sm="10">
//                                                 <Form.Control
//                                                     type="text"
//                                                     autoFocus
//                                                     value={newValue.detail}
//                                                     onChange={event => { setNewValue({ ...newValue, detail: event.target.value }) }}
//                                                 />
//                                             </Col>
//                                         </Form.Group>
//                                         <Form.Group as={Row} className="mb-3" >
//                                             <Form.Label column sm="2">
//                                                 Image Url
//                                             </Form.Label>
//                                             <Col sm="10">
//                                                 <Form.Control
//                                                     type="text"
//                                                     autoFocus
//                                                     value={newValue.imageUrl}
//                                                     onChange={event => { setNewValue({ ...newValue, imageUrl: event.target.value }) }}
//                                                 />
//                                             </Col>
//                                         </Form.Group>
//                                         <Form.Group as={Row} className="mb-3" >
//                                             <Form.Label column sm="2">
//                                                 Price
//                                             </Form.Label>
//                                             <Col sm="10">
//                                                 <Form.Control
//                                                     type="text"
//                                                     autoFocus
//                                                     value={newValue.price}
//                                                     onChange={event => { setNewValue({ ...newValue, price: Number(event.target.value) }) }}
//                                                 />
//                                             </Col>
//                                         </Form.Group>
//                                     </Form>
//                                 </Col>
//                             </Row>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Cancle
//                             </Button>
//                             <AddButton />
//                         </Modal.Footer>
//                     </Modal>
//                 </div>
//             )}
//         </>
//     )
// }