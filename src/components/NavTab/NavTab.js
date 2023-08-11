import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <a href="#about-project" className="nav-tab__button">О проекте</a>
      <a href="#techs" className="nav-tab__button">Технологии</a>
      <a href="#about-me" className="nav-tab__button">Студент</a>
    </nav>
  )
}

export default NavTab;