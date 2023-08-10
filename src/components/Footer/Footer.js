import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__date">&copy; 2023</p>
        <p className="footer__platform">Яндекс.Практикум</p>
        <p className="footer__github">Github</p>
      </div>
    </footer>
  )
}

export default Footer;