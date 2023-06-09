import Navbar from 'react-bootstrap/Navbar';
import CreateIcon from '@mui/icons-material/Create';

// import Button from 'react-bootstrap/Button';
// import AddProduct from './AddProduct';

export function Header() {
  return (
    <>
      {/*
         <Navbar fixed="top" style={{ backgroundColor: '#F7F9F7' }}>
        <Container>
          <Navbar.Brand href="#" >
            <CreateIcon style={{ marginLeft: "1.5rem" }} />
            {' '} Stionnery Store
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AddProduct />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      */}


      <Navbar bg="light" fixed="top">
        <Navbar.Brand href="#" >
          <CreateIcon style={{ marginLeft: "1.5rem" }} />
          {' '} Stionnery Store
        </Navbar.Brand>
      </Navbar>

      <div className="description-container">
        <h2 className="description-text">Welcome to the Stationery Store!</h2>
      </div>
    </>
  );
}
