import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__link-list">
        <li className="portfolio__list-element">
          <p className="portfolio__list-text">Статичный сайт</p>
          <a href="https://agregati4.github.io/how-to-learn/" className="portfolio__list-icon">↗</a>
        </li>
        <li className="portfolio__list-element">
          <p className="portfolio__list-text">Адаптивный сайт</p>
          <a href="https://agregati4.github.io/russian-travel/" className="portfolio__list-icon">↗</a>
        </li>
        <li className="portfolio__list-element">
          <p className="portfolio__list-text">Одностраничное приложение</p>
          <a href="https://agregati4.github.io/mesto/" className="portfolio__list-icon">↗</a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;