import React from 'react';
import '../Footer/Footer.css'
import { Button } from '../Button/Button.jsx'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Si queres recibir las mejores ofertas, no dudes en suscribirte
        </p>
        <p className='footer-subscription-text'>
          Te podes desuscribir cuando vos quieras
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu Email'
            />
            <Button buttonStyle='btn--outline'>Suscribite</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre Nosotros</h2>
            <Link to='/sign-up'>Como funciona</Link>
            <Link to='/'>Testimonios</Link>
            <Link to='/'>Inversores</Link>
            <Link to='/'>Terminos y condiciones</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Soporte</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Productos</h2>
            <Link to='/'>Celulares</Link>
            <Link to='/'>Computadoras</Link>
            <Link to='/'>Tablets</Link>
            <Link to='/'>Mas</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
        
          <small className='website-rights'>INFORMARTICA 2023 </small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;