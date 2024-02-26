import './main10.css'
import { Container, Row , Col} from 'react-bootstrap'

const Main10 = () => {
  return (
    <div>

      <Container fluid="md" className='pt-5 pb-5'>
            <h2 className='border-bottom border-4 d-inline-block pb-2 border-success '>Contact</h2>
            <p className='pt-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

            <div class="ratio ratio-16x9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96714.68291250926!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nowy%20Jork%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1672242259543!5m2!1spl!2spl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> 
     </Container>
    </div>
  )
}

export default Main10