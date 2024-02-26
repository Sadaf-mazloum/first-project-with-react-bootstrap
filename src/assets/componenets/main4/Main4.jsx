import './main4.css'
import { Container, Row , Col} from 'react-bootstrap'

const Main4 = () => {
  return (
    <div>  
       <Container fluid="md"className='mt-5'>
           <Row>
             <Col lg={6} className='order-2 order-lg-1 mt-5'>

             <div>
              <i class="bi bi-award-fill text-success fs-1 d-inline pe-2"></i>
              <h4 className='d-inline ps-2'>Est labore ad</h4>
              <p className='ps-4'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>

              <div className='mt-3'>
              <i class="bi bi-award-fill text-success fs-1 d-inline pe-2"></i>
              <h4 className='d-inline ps-2'>Harum esse qui</h4>
              <p className='ps-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>

              <div className='mt-3'>
              <i class="bi bi-award-fill text-success fs-1 d-inline pe-2"></i>
              <h4 className='d-inline ps-2'>Aut occaecati</h4>
              <p className='ps-4'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>

              <div className='mt-3'>
              <i class="bi bi-award-fill text-success fs-1 d-inline pe-2"></i>
              <h4 className='d-inline ps-2'>Beatae veritatis</h4>
              <p className='ps-4'>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>

             </Col>

             <Col lg={6} className='order-1 order-lg-2'>
                 <div className='background mt-5 rounded-4'>
    
                 </div>
             </Col>
           </Row>
       </Container>
    </div>
  )
}

export default Main4