import './styles.css';
import Insta from '../../assets/instagram.png'
import Whats from '../../assets/whatsapp.png'

function Header() {
    return (
        <div className='container-header'>
            <div className='header-title'>
                <h1>Atelier Denise Colaferro</h1>
                <p>arte vitral</p>
            </div>
            <div className='social-media'>
                <a href='https://www.instagram.com/atelierdenisecolaferro/' rel='noreferrer' target='_blank'><img src={Insta} alt='instagram' />Instagram</a>
                <a href='https://wa.me/557199748381' rel='noreferrer' target='_blank'><img src={Whats} alt='WhatsApp' />WhatsApp</a>

            </div>
        </div>
    );
}

export default Header;
