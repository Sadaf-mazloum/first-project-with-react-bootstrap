import './main11.css'
import { Container, Row , Col, Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

const Main11 = () => {
  return (
    <div className='mb-5'>
           <Container fluid='md'>
               <Row>
                         <Col sm={12} md={4} lg={4}>
                                 
                         <div>
              <i class="bi bi-award-fill text-success fs-1 d-inline pe-2"></i>
              <h4 className='d-inline ps-2'>Location</h4>
              <p className='ps-4'>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className='mt-3'>
              <i class="bi bi-award-fill text-success fs-1 d-inline pe-2"></i>
              <h4 className='d-inline ps-2'>Email:</h4>
              <p className='ps-4'>sathafmz@gmail.com</p>
              </div>

              <div className='mt-3'>
              <i class="bi bi-award-fill text-success fs-1 d-inline pe-2"></i>
              <h4 className='d-inline ps-2'>Call:</h4>
              <p className='ps-4'>09303065958</p>
              </div>

                        </Col>
                        <Col sm={12} md={8} lg={8}> 
                          <div className='row'>
                            <div className='col-md-6'>
                            <Form.Control size="lg" type="text" placeholder="your name "/> 
                            </div>
                            <div className='col-md-6'>
                            <Form.Control type="text" placeholder="last name" size="lg" />
                            </div>
                         <Form.Control size="lg" type="text" placeholder="subject" className='my-4' /> 
                         <Form.Control type="text" placeholder="message" size="lg" className='my-4 p-5'/>
                          </div>
                         <div className='text-center'>
                         <Button variant="success" className='rounded-5 px-4'>send message</Button>
                         </div>
                          
                        </Col>
               </Row>
           </Container>
    </div>
  )
}

export default Main11