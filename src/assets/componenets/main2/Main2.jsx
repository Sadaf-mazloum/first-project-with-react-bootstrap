import './main2.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cardx from './Cardss';

const Main2 = () => {
  return (
    <div>
        <Container fluid="md">
        <h2 className='border-bottom border-4 d-inline-block pb-2 border-success'>servies</h2>
            <p className='pt-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <Row className='text-start'>
            <Cardx/>
            </Row>
        
            
        </Container>
    </div>
  )
}

export default Main2