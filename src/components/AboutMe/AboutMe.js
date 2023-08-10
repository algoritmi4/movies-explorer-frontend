import './AboutMe.css';
import photo from '../../images/about-me__photo.jpg';

function AboutMe() {
  return (
    <div id="about-me" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <figure className="about-me__container">
        <figcaption className="about-me__info-box">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__activity">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
           Я люблю слушать музыку, а ещё увлекаюсь бегом. 
           Недавно начал кодить. 
           С 2015 года работал в компании «СКБ Контур». 
           После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <p className="about-me__caption">Github</p>
        </figcaption>
        <img src={ photo } className="about-me__photo" alt="Фото" />
      </figure>
    </div>
  )
}

export default AboutMe;