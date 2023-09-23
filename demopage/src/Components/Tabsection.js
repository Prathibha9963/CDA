import Nav from 'react-bootstrap/Nav';

function Tabsection() {
  return (
    <>
      <Nav className="justify-content-center text-center mt-4 mb-4 text-dark" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className='text-dark'><h6>Hair</h6></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='text-dark'><h6>HairCare</h6></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='text-dark'><h6>Skin & Personal Care</h6></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className='text-dark'><h6>Makeup</h6></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='text-dark'><h6>Fragrance</h6></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='text-dark'><h6>Tools & accessories</h6></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='text-dark'><h6>Fashion & apparel</h6></Nav.Link>
        </Nav.Item>
      </Nav>
   
    </>
  );
}

export default Tabsection;