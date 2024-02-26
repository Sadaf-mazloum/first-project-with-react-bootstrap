import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './header.css';
import './transtion';
import Main2 from '../main2/Main2';
import Main3 from '../main3/Main3';
import Main4 from '../main4/Main4';
import Main5 from '../main5/Main5';
import Main6 from '../main6/Main6';
import Main7 from '../main7/Main7';
import Main8 from '../main8/Main8';
import Main9 from '../main9/Main9';
import Main10 from '../main10/Main10';
import Main11 from '../main11/Main11';
export const Header = () => {
  return (
    <div className=" background-img text-white " >
         
    <Container fluid className=' pt-5 set_space text-center'>
        <row className='text-center'> 
            <h1 className='fs-1 fw-bolder set-mt'>KnightOne - Create Bootstrap <br /> Website Template</h1>
            <p className='pt-3 fs-3'>We are team of designers making websites with Bootstrap</p>
            
            <Button  className='rounded-circle mt-5 set_play2 border-5'  >
            <Button variant="success " className='rounded-circle set_play hoveri ' >
            <i class="bi bi-play-fill fs-1 "></i>
            
            </Button>
            </Button>
        </row>
    </Container>
    {/* <Main2/>
    <Main3/>
    <Main4/>
    <Main5/>
    <Main6/>
    <Main7/>
    <Main8/>
    <Main9/>
    <Main10/>
    <Main11/> */}
    </div>
  )
}
export default Header
