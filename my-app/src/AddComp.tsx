import './AddComp.css';
import './data';

function Add() {
    return (
      <>
        <div className='Add-container'>
          <div className="row mb-3 ">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="product name" />
            </div>
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Detail</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="detail" />
            </div>
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Image</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="image" />
            </div>
          
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Price</label>
            <div className="col-sm-10">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="price" />
            </div>
          </div>
          <button type="button" className="btn btn-success btn-sm">
            Add
          </button>
        </div>
      </>
    );
  }

  export default Add;