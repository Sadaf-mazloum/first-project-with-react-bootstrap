import './main3.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Main3 = () => {
  return (
    <div className="mt-5 background-img1">

      <Container>
        <Row className=' text-center pb-5'>
            <Col lg={9} md={9} sm={12} className=' text-white '>
               <h3 className='margin-col'>Call To Action</h3>
               <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br />cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col lg={3} md={3} sm={12} >
            <Button variant="success rounded-5" className='px-4 py-2 fs-5  margin-col'>Call To Action</Button>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Main3