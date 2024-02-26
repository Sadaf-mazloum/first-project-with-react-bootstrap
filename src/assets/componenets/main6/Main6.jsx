import './main6.css'
import { Container, Row , Col} from 'react-bootstrap'
import CountUp from 'react-countup';

const Main6 = () => {
  return (
    <div className='background-img2 mt-5'>
        <Container fluid='md'>
          <Row className='text-center pt-5'>
               <h2 className='pt-5 text-white'>What we have achieved so far</h2>
               <p className='text-white pt-1'>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
          </Row>
          <Row className='text-center text-white pb-5 pt-5'>
                <Col lg={3} md={6} xs={3} sm={6} >
                       <div>
                        <span className='div1'>
                             <CountUp start={0} className='fs-1 text-success fw-bold'
                                 end={100}
                              duration={1}/>
                            </span>
                        <p>Clients</p>
                       </div>
                </Col>
                <Col lg={3} md={6} xs={3} sm={6} >
                       <div>
                        <span className='div2'>
                        <CountUp start={0}  className='fs-1 text-success fw-bold'
                                 end={100}
                              duration={2}/>
                        </span>
                        <p>Projects</p>
                       </div>
                </Col>
                <Col lg={3} md={6} xs={3} sm={6} >
                       <div>
                        <span className='div3'> 
                        <CountUp start={0} className='fs-1 text-success fw-bold'
                                 end={100}
                              duration={2}/>
                        </span>
                        <p>Hours Of Support</p>
                       </div>
                </Col>
                <Col lg={3} md={6} xs={3} sm={6} >
                       <div>
                        <span className='div4'> 
                        <CountUp start={0}   className='fs-1 text-success fw-bold' 
                                 end={100}
                              duration={2}/>
                        </span>
                        <p>Hard Workers</p>
                       </div>
                </Col>
          </Row>


        </Container>

    </div>
  )
}

export default Main6