import './main8.css'
import { Container, Row , Col ,Button ,Card} from 'react-bootstrap'

const Main8 = () => {
  return (
    <div className='mt-5 bg-color pb-5'>  
    <Container fluid="md">
        <div className='pt-5'>
        <h2 className='border-bottom border-4 d-inline-block pb-2 border-success'>Pricing</h2>
        <p className='pt-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas</p>
        </div>
        <Row className='mt-5 justify-content-center'>
             <Col lg={4} md={6} sm={12} className='g-4'>
        <Card style={{ maxWidth: '22rem',minWidth:'18rem' }} className='text-center pt-5 pb-4 border-light shadow-lg'>
        <Card.Body>
            <Card.Title>free</Card.Title>
        <Card.Title className='pt-3 text-success fs-3'>$0 / month</Card.Title>
        <Card.Text className='pt-4'>
        Aida dere <br />
         Nec feugiat nisl <br />
        Nulla at volutpat dola
        </Card.Text>
        <Card.Text>
            <p className='pdec text-secondary'>Pharetra massa <br />
            Massa ultricies mi<br /></p>
        </Card.Text>
         <Button variant='outline-success' className='px-5 py-2 rounded-5 mt-4'> by now</Button>
        </Card.Body>
        </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className='g-4'>
            <Card style={{ maxWidth: '22rem',minWidth:'18rem' }} className='text-center pt-3 pb-4 border-light shadow-lg'>
        <Card.Body className='text-center'>
        <Card.Text className='text-success border bg-butt rounded-5 '>recommended</Card.Text>
            <Card.Title>free</Card.Title>
        <Card.Title className='pt-3 text-success fs-3'>$19 / month</Card.Title>
        <Card.Text className='pt-4'>
        Aida dere <br />
         Nec feugiat nisl <br />
        Nulla at volutpat dola
        </Card.Text>
        <Card.Text>
            <p className='pdec text-secondary'>Pharetra massa <br />
            Massa ultricies mi<br /></p>
        </Card.Text>
         <Button variant='success' className='px-5 py-2 rounded-5 mt-4'> by now</Button>
        </Card.Body>
        </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className='g-4 '>
            <Card style={{ maxWidth: '22rem',minWidth:'18rem' }} className='text-center pt-5 pb-4 border-light shadow-lg'>
        <Card.Body>
            <Card.Title>Developer</Card.Title>
        <Card.Title className='pt-3 text-success fs-3'>$29 / month</Card.Title>
        <Card.Text className='pt-4'>
        Aida dere <br />
         Nec feugiat nisl <br />
        Nulla at volutpat dola
        </Card.Text>
        <Card.Text>
            <p className='pdec text-secondary'>Pharetra massa <br />
            Massa ultricies mi<br /></p>
        </Card.Text>
         <Button variant='outline-success' className='px-5 py-2 rounded-5 mt-4'> by now</Button>
        </Card.Body>
        </Card>
            </Col>
        </Row>
    </Container>

    </div>
  )
}

export default Main8