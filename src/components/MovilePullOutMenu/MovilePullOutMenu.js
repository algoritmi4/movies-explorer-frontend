import './MovilePullOutMenu.css';

function MovilePullOutMenu() {
  return (
    <div className="pull-out-menu">
      <div className="pull-out-menu__cross"></div>
      <nav className="pull-out-menu__nav">
        <button className="pull-out-menu__button" type="button"></button>
        <button className="pull-out-menu__button" type="button"></button>
        <button className="pull-out-menu__button" type="button"></button>
        <button className="pull-out-menu__button" type="button"></button>
      </nav>
    </div>
  )
}

export default MovilePullOutMenu;