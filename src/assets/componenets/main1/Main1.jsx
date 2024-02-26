import './main1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Main1 = () => {
  return (
    <div>
         <Container fluid="md" className='pt-5 pb-5'>
            <h2 className='border-bottom border-4 d-inline-block pb-2 border-success '>About us</h2>
            <p className='pt-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      <Row className='pt-3 pb-5'>
        <Col lg={6} sm={12}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <ul className='bullet ps-0'>
                    <li>
                    <i class="bi bi-check2-all fs-4 icon-green "></i>
                   <p className='d-inline-block ps-3'>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </li>
                    <li>
                    <i class="bi bi-check2-all fs-4 icon-green "></i>
                   <p className='d-inline-block ps-3'>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    </li>
                    <li>
                    <i class="bi bi-check2-all fs-4 icon-green "></i>
                   <p className='d-inline-block ps-3'>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </li>
                </ul>
        </Col>
        <Col lg={6} sm={12}>
               <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
               <Button variant="outline-success" className='border-3 px-5 rounded-4 fs-6 py-2'>learn more</Button>
        </Col>
      </Row>
    </Container>
    
    </div>
  )
}

export default Main1