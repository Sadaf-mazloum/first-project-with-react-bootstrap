import './footer.css'
import { Container, Row , Col} from 'react-bootstrap'
const Footer = () => {
  return (
    <div className=' pt-5 bg'>
        <Container fluid="md">
               <Row className='text-center text-white'>
               
                     <h3 className='fw-bolder fs-1'>KnightOne</h3>
                     <p className='pt-2'>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat</p>
                      <div className='mt-4'>
                        <a href="" className='mx-1'><i class="bi bi-browser-chrome fs-5 px-2 py-1 bg-success rounded-circle text-white"></i></a>
                        <a href="" className='mx-1'><i class="bi bi-browser-chrome fs-5 px-2 py-1 bg-success rounded-circle text-white"></i></a>
                        <a href="" className='mx-1'><i class="bi bi-browser-chrome fs-5 px-2 py-1 bg-success rounded-circle text-white"></i></a>
                        <a href="" className='mx-1'><i class="bi bi-browser-chrome fs-5 px-2 py-1 bg-success rounded-circle text-white"></i></a>
                        <a href="" className='mx-1'><i class="bi bi-browser-chrome fs-5 px-2 py-1 bg-success rounded-circle text-white"></i></a>
                      </div>
                      <div>
                        <p className='pt-5 fs-6'>© Copyright KnightOne. All Rights Reserved <br />
                      Designed by<span className='text-success'>  react-Bootstrap</span> </p>
                      </div>
               </Row>
        </Container>
    </div>
  )
}

export default Footer