// import React from 'react';
// import products from './data';

// export function showModal() {
//     const ShowProd = products.map((aprod, index) => (
//         <div className="container">
//             <div className="card" key={index}>
//                 <img src={aprod.imageUrl} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{aprod.name}</h5>
//                     <p className="card-text">Detail {aprod.detail}</p>
//                     <p className="card-text">Price {aprod.price}</p>
//                 </div>
//             </div>
//         </div>
//     ));

//     const Modal = ({ open }) => {
//         if (!open) return null;
//         return (
//             <div className='overlay'>
//                 <div className='modal-container'>
//                     {ShowProd}
//                 </div>
//             </div>
//         )
//     }
// }