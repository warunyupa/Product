import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './AddComp.css'

type Product = {
  name: string,
  detail: string,
  imageUrl: string,
  price: number
}

//----functions---//
export function ShowProduct() {
  const intialValues = [
    {
      name: "pencil",
      detail: "sharp and dark",
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABMlBMVEX////8/Pz39/f/lwD09PT/nQDx8fH/mgD29vT//PnV1NTu7u7/oAD/lQD+kgDLdCX9vnz+oST4lQD+8eP+5s7HbQ/Qdx/l5eT/8O7/1Nb9ZmH7rKX/9fP9eXzsUFTILTXNWlj41tH8n5bwSVLRQUybLjaEHyyJAADo0M7sxZLvy5HtqYOyPUSPKTWeRE3uyYj63qjlyJivf0uLODXyxn/kvYXIo3CNZj7ZsZzTnlnDmV3Ppmvt0K3ru3L97tfhr2i/jFPftHO0jlp/WTTarnvbgRmfUhawYiepUw+/gUDDgVj755i8byL+tGbigADuzn3TlUblxLTPl3H+0KS2XQzWpIX+qU7FfjG5czju1cT+xY3pupzLgk/bnW3XiTbMgEDsmjSnkHmlfGA6KSBaV1qsq6224gzwAAADu0lEQVR4nO2be1PaQBTFAyFdooRAQrAP+m6tYluQBusqmsYSHjGFLYKhPgh9+P2/QjfgMOCUaQc7nn+4OmLQmf2Zs+fm3GQUhGUt627rPhpAePDwUQ5LkHv85Omz50gC+cXLV6/X32wAETbzW2/frb+P4ggyheJ26cM68CTkzHJx52NpF0cgV2l+e2+/cIhDqFgH5e1SHkiQs8o2/WQXcQTCplk8OrIOdBxBxszbpc92BUeQq+bze6X9ooxDSDl2eW8/DyTIkIRRO0K6QRYTTq1Wz+AIhJSkNWoNYFsUMqLkNxsucCPo6YRjHXvIvPRFarVN9hVIUCEaO6YdIEFOlByrTYGNWTiVWhZtI2U4IVLXbPciOALuBqNW95DB/VTSAtr4BiQ4IVqX+j0ggS5KBu27QBkivCnVmwwqg0L6tImUYRQSvAvg1SlsSvV+HSqDyN3QR8pwmEwYdQ8ZEmQuQ5OqyKvTmah5de8cSMCzmtFnF0ACQQvdEIBlCPpdqAyKlKX0EukGHplpgI3MROs3GVQGwi/R9BJIIEuJFvWhbuADpGdDQ0KFkAHzkZOLnpacgAbIyMzdQA886OQikmzgbwEJdCI5lAbIpsTdQKmPjczSwGLQyUWSHM8LgAThAEk9FRyZWbMLHiAdyqAhgUdmxgbgrMaYjwwJYVNiPlIGIU1aNPChMhAt6xnYyYUMqYqc40M3BAWoG1LcDRY2MovEoRY0Mqe5DCYDNyXVwt7s53N8ASvDkDclawCNzIrmWwz4FFaoJEnWhMqga+LQtqHPXFKKZh4PoAOkQgaUVoEEukhaKmXQu8xEU1VsZE5qWRUaEkYyqAFUBpETGEg/nigiWIZDHhLAMqT5JVrNIt1wBndDRhEd1YAOkEO4G1JJUQXLkBzJACSQ06EM2EdfIzdAIzNcBj2UIatCI3MS3RYrSYXLAL2vpoQyYG/2K6EbsFktlAGa1RQllAGa1TgB1g1cBnRWCzcCVAZ5OJIBGxLgWS2JzmpjN0BDwkaa+VloW5R7nU4zQN5SEnS34/bOkRtB6HXcKpZA77g759h/Peu5HTCB7rpgAn4SdsEEG24PTBD9/uM2TTEy+bJ4rfxc+dfVrmvyzc1akCDyax7BvIUi0Zmj+K0hrq5mF41OV2z8Eo/HZ47n1UIIEeEqtrq2Ml1rk1qdrXuTioUV5x83uBY7C/zPjsXujddYG33OLDZebariUxWLxv/DWZjeYuOj+Vtgei9E//yTRQiuIf7yG9Ovkam3bgIvSLCsZd11/QYRZJp75oM+IQAAAABJRU5ErkJggg==",
      price: 15,
    },
    {
      name: "pencil",
      detail: "sharp and dark",
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABMlBMVEX////8/Pz39/f/lwD09PT/nQDx8fH/mgD29vT//PnV1NTu7u7/oAD/lQD+kgDLdCX9vnz+oST4lQD+8eP+5s7HbQ/Qdx/l5eT/8O7/1Nb9ZmH7rKX/9fP9eXzsUFTILTXNWlj41tH8n5bwSVLRQUybLjaEHyyJAADo0M7sxZLvy5HtqYOyPUSPKTWeRE3uyYj63qjlyJivf0uLODXyxn/kvYXIo3CNZj7ZsZzTnlnDmV3Ppmvt0K3ru3L97tfhr2i/jFPftHO0jlp/WTTarnvbgRmfUhawYiepUw+/gUDDgVj755i8byL+tGbigADuzn3TlUblxLTPl3H+0KS2XQzWpIX+qU7FfjG5czju1cT+xY3pupzLgk/bnW3XiTbMgEDsmjSnkHmlfGA6KSBaV1qsq6224gzwAAADu0lEQVR4nO2be1PaQBTFAyFdooRAQrAP+m6tYluQBusqmsYSHjGFLYKhPgh9+P2/QjfgMOCUaQc7nn+4OmLQmf2Zs+fm3GQUhGUt627rPhpAePDwUQ5LkHv85Omz50gC+cXLV6/X32wAETbzW2/frb+P4ggyheJ26cM68CTkzHJx52NpF0cgV2l+e2+/cIhDqFgH5e1SHkiQs8o2/WQXcQTCplk8OrIOdBxBxszbpc92BUeQq+bze6X9ooxDSDl2eW8/DyTIkIRRO0K6QRYTTq1Wz+AIhJSkNWoNYFsUMqLkNxsucCPo6YRjHXvIvPRFarVN9hVIUCEaO6YdIEFOlByrTYGNWTiVWhZtI2U4IVLXbPciOALuBqNW95DB/VTSAtr4BiQ4IVqX+j0ggS5KBu27QBkivCnVmwwqg0L6tImUYRQSvAvg1SlsSvV+HSqDyN3QR8pwmEwYdQ8ZEmQuQ5OqyKvTmah5de8cSMCzmtFnF0ACQQvdEIBlCPpdqAyKlKX0EukGHplpgI3MROs3GVQGwi/R9BJIIEuJFvWhbuADpGdDQ0KFkAHzkZOLnpacgAbIyMzdQA886OQikmzgbwEJdCI5lAbIpsTdQKmPjczSwGLQyUWSHM8LgAThAEk9FRyZWbMLHiAdyqAhgUdmxgbgrMaYjwwJYVNiPlIGIU1aNPChMhAt6xnYyYUMqYqc40M3BAWoG1LcDRY2MovEoRY0Mqe5DCYDNyXVwt7s53N8ASvDkDclawCNzIrmWwz4FFaoJEnWhMqga+LQtqHPXFKKZh4PoAOkQgaUVoEEukhaKmXQu8xEU1VsZE5qWRUaEkYyqAFUBpETGEg/nigiWIZDHhLAMqT5JVrNIt1wBndDRhEd1YAOkEO4G1JJUQXLkBzJACSQ06EM2EdfIzdAIzNcBj2UIatCI3MS3RYrSYXLAL2vpoQyYG/2K6EbsFktlAGa1RQllAGa1TgB1g1cBnRWCzcCVAZ5OJIBGxLgWS2JzmpjN0BDwkaa+VloW5R7nU4zQN5SEnS34/bOkRtB6HXcKpZA77g759h/Peu5HTCB7rpgAn4SdsEEG24PTBD9/uM2TTEy+bJ4rfxc+dfVrmvyzc1akCDyax7BvIUi0Zmj+K0hrq5mF41OV2z8Eo/HZ47n1UIIEeEqtrq2Ml1rk1qdrXuTioUV5x83uBY7C/zPjsXujddYG33OLDZebariUxWLxv/DWZjeYuOj+Vtgei9E//yTRQiuIf7yG9Ovkam3bgIvSLCsZd11/QYRZJp75oM+IQAAAABJRU5ErkJggg==",
      price: 15,
    },
    {
      name: "pencil",
      detail: "sharp and dark",
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABMlBMVEX////8/Pz39/f/lwD09PT/nQDx8fH/mgD29vT//PnV1NTu7u7/oAD/lQD+kgDLdCX9vnz+oST4lQD+8eP+5s7HbQ/Qdx/l5eT/8O7/1Nb9ZmH7rKX/9fP9eXzsUFTILTXNWlj41tH8n5bwSVLRQUybLjaEHyyJAADo0M7sxZLvy5HtqYOyPUSPKTWeRE3uyYj63qjlyJivf0uLODXyxn/kvYXIo3CNZj7ZsZzTnlnDmV3Ppmvt0K3ru3L97tfhr2i/jFPftHO0jlp/WTTarnvbgRmfUhawYiepUw+/gUDDgVj755i8byL+tGbigADuzn3TlUblxLTPl3H+0KS2XQzWpIX+qU7FfjG5czju1cT+xY3pupzLgk/bnW3XiTbMgEDsmjSnkHmlfGA6KSBaV1qsq6224gzwAAADu0lEQVR4nO2be1PaQBTFAyFdooRAQrAP+m6tYluQBusqmsYSHjGFLYKhPgh9+P2/QjfgMOCUaQc7nn+4OmLQmf2Zs+fm3GQUhGUt627rPhpAePDwUQ5LkHv85Omz50gC+cXLV6/X32wAETbzW2/frb+P4ggyheJ26cM68CTkzHJx52NpF0cgV2l+e2+/cIhDqFgH5e1SHkiQs8o2/WQXcQTCplk8OrIOdBxBxszbpc92BUeQq+bze6X9ooxDSDl2eW8/DyTIkIRRO0K6QRYTTq1Wz+AIhJSkNWoNYFsUMqLkNxsucCPo6YRjHXvIvPRFarVN9hVIUCEaO6YdIEFOlByrTYGNWTiVWhZtI2U4IVLXbPciOALuBqNW95DB/VTSAtr4BiQ4IVqX+j0ggS5KBu27QBkivCnVmwwqg0L6tImUYRQSvAvg1SlsSvV+HSqDyN3QR8pwmEwYdQ8ZEmQuQ5OqyKvTmah5de8cSMCzmtFnF0ACQQvdEIBlCPpdqAyKlKX0EukGHplpgI3MROs3GVQGwi/R9BJIIEuJFvWhbuADpGdDQ0KFkAHzkZOLnpacgAbIyMzdQA886OQikmzgbwEJdCI5lAbIpsTdQKmPjczSwGLQyUWSHM8LgAThAEk9FRyZWbMLHiAdyqAhgUdmxgbgrMaYjwwJYVNiPlIGIU1aNPChMhAt6xnYyYUMqYqc40M3BAWoG1LcDRY2MovEoRY0Mqe5DCYDNyXVwt7s53N8ASvDkDclawCNzIrmWwz4FFaoJEnWhMqga+LQtqHPXFKKZh4PoAOkQgaUVoEEukhaKmXQu8xEU1VsZE5qWRUaEkYyqAFUBpETGEg/nigiWIZDHhLAMqT5JVrNIt1wBndDRhEd1YAOkEO4G1JJUQXLkBzJACSQ06EM2EdfIzdAIzNcBj2UIatCI3MS3RYrSYXLAL2vpoQyYG/2K6EbsFktlAGa1RQllAGa1TgB1g1cBnRWCzcCVAZ5OJIBGxLgWS2JzmpjN0BDwkaa+VloW5R7nU4zQN5SEnS34/bOkRtB6HXcKpZA77g759h/Peu5HTCB7rpgAn4SdsEEG24PTBD9/uM2TTEy+bJ4rfxc+dfVrmvyzc1akCDyax7BvIUi0Zmj+K0hrq5mF41OV2z8Eo/HZ47n1UIIEeEqtrq2Ml1rk1qdrXuTioUV5x83uBY7C/zPjsXujddYG33OLDZebariUxWLxv/DWZjeYuOj+Vtgei9E//yTRQiuIf7yG9Ovkam3bgIvSLCsZd11/QYRZJp75oM+IQAAAABJRU5ErkJggg==",
      price: 15,
    },
  ]

  const [products, setProducts] = useState<Product[]>(intialValues);

  type Product = typeof initProd;
  const initProd = { name: '', detail: '', imageUrl: '', price: 0 }
  const [newProduct, setNewProduct] = useState<Product>(initProd)

  const addProduct = ()=> {
    products.push(newProduct)
    console.log(newProduct)
    setNewProduct(initProd)
  }

  const deleteProduct = (index: number) => {
    setProducts((oldValues) => {
      const updatedProducts = [...oldValues];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
  };
  
  return (
    // <DetailComp
    // show= {true}
    // />
    <>
      <div className='Add-container'>
        <div className="row mb-3 ">
          <label className="col-sm-2 col-form-label col-form-label-sm">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-sm" placeholder="product name" value={newProduct.name} onChange={event => { setNewProduct({ ...newProduct, name: event.target.value }) }} />
          </div>
          <label className="col-sm-2 col-form-label ">Detail</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-sm" placeholder="detail" value={newProduct.detail} onChange={event => { setNewProduct({ ...newProduct, detail: event.target.value }) }} />
          </div>
          <label className="col-sm-2 col-form-label col-form-label-sm">Image</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-sm" placeholder="image" value={newProduct.imageUrl} onChange={event => { setNewProduct({ ...newProduct, imageUrl: event.target.value }) }} />
          </div>

          <label className="col-sm-2 col-form-label col-form-label-sm" >Price</label>
          <div className="col-sm-10">
            <input type="text" className="form-control form-control-sm" placeholder="price" value={newProduct.price} onChange={event => { setNewProduct({ ...newProduct, price: Number(event.target.value) }) }} />
          </div>
        </div>
        <button type="button" className="btn btn-success btn-sm" onClick={() => addProduct()} >
          Add
        </button>
      </div>

      <div className='ListProducts-container'>
        <div className="container text-center" >
          <div className="row g-4">
            {products.map((product, index) => (
              <div className="col-md-4">
                <div className="card" key={index} >
                  <img src={product.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowProduct;
