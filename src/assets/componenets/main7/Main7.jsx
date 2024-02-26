import './main7.css'
import { Container, Row , Col ,Button} from 'react-bootstrap'
import './transtion.js'

const Main7 = () => {
  return (
    <div className='mt-5'>
          <Container fluid="md">
            <div>
            <h2 className='border-bottom border-4 d-inline-block pb-2 border-success'>Portfolio</h2>
            <p className='pt-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas</p>
            <div className='text-center mt-5'>
               <Button variant='success' className='px-3 mx-2 rounded-5'>all</Button>
               <Button variant='success' className='px-3 mx-2 rounded-5'>app</Button>
               <Button variant='success' className='px-3 mx-2 rounded-5'>card</Button>
               <Button variant='success' className='px-3 mx-2 rounded-5'>web</Button>
            </div>
            </div>
            <Row className='mt-5'>
                 
            <Col lg={4} md={4} sm={12}> 
            <div > 
                  <img src="public/img/portfolio-1.jpg" alt="" className='img-fluid ' />
                  <div className='bg-success text-white p-3'>
                    <h4 className='text-white px-3'>app2 
                      <div className='d-inline-block set-spacee pt-3 ' >
                    <i class="bi bi-plus"></i>
                    <i class="bi bi-cloud-download"></i>
                    </div>
                    </h4>
                    <p className='text-white px-3'>app</p>
                  
                  </div>
                  
            </div>
            <div>
                 <img src="public/img/portfolio-6.jpg" alt="" className='img-fluid pt-5'/>
            </div>
            </Col>

            <Col lg={4} md={4} sm={12}>
            <div>
                  <img src="public/img/portfolio-2.jpg" alt="" className='img-fluid' />
                 </div>
                 <div>
                 <img src="public/img/portfolio-5.jpg" alt="" className='img-fluid pt-5' />
                 </div>
                 <div>
                 <img src="public/img/portfolio-9.jpg" alt="" className='img-fluid pt-5' />
                 </div>
            </Col>

            <Col lg={4} md={4} sm={12}>
            <div>
            <img src="public/img/portfolio-3.jpg" alt="" className='img-fluid'/>
                 </div>
                 <div>
                 <img src="public/img/portfolio-4.jpg" alt="" className='img-fluid pt-5' />
                 </div>
                 <div>
                 <img src="public/img/portfolio-7.jpg" alt="" className='img-fluid pt-5'/>
                 </div>
                 <div>
                 <img src="public/img/portfolio-8.jpg" alt="" className='img-fluid pt-5'/>
                 </div>
            </Col>

            </Row>
        </Container>
    </div>
  )
}

export default Main7