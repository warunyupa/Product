import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CreateIcon from '@mui/icons-material/Create';
import Figure from 'react-bootstrap/Figure';

import Styles from './HeaderStyle.css';

export function Header() {
  return (
    <>
      <Navbar bg="light" fixed="top">
        <Navbar.Brand>
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
