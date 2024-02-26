import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cards from './Cards';
import './main2.css'
const createcard=(cards)=>{
    return(
    <Col key={cards.id} className='g-5'>
      <div>
            <Card className='border-light shadow-lg pt-5 pb-5 cardhover'>
              <Card.Img variant="info" src={cards.img}/>
              <Card.Body>
                <Card.Title className='fw-bold fs-4 pt-2 pb-2 hovertitle'> <a href="">{cards.title}</a>  </Card.Title>
                <Card.Text>
                  <a href=""className='ap'>
                {cards.paragraph}</a>
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </Col> 
  
  )}
  const Cardx=()=> {
    return (
      <div>
      <Row  md={2} lg={3} sm={2}>
       {cards.map(createcard)}
      
      </Row>
    </div>);
  }
  
  export default Cardx;