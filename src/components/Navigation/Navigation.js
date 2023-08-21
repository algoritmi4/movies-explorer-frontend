import * as React from 'react';
import './Navigation.css';

function Navigation(props) {
  const isPullOutMenuNeed = props.isLoggedIn && !props.isPullOutMenuOpen;

  return (
    <div className={ `navigation ${ props.isPullOutMenuOpen ? "navigation_blackout-background" : "" }` }>
      <nav className={
        `navigation__container
        ${ props.isLoggedIn ?
        "navigation__container_pull-out-menu_open" : "" }
        ${ isPullOutMenuNeed ? "navigation__container_pull-out-menu_close" : "" }`
      }>
        <button type="button" onClick={ props.handlePullOutMenu } className={
          `navigation__cross
          ${ !props.isLoggedIn ? "navigation__cross_mobile-display-none" : "" }`
        }></button>
        <a href="/" className={
          `navigation__button navigation__button_type_main-link
          ${ !props.isLoggedIn ? "navigation__button_mobile-display-none" : "" }`
        }>Главная</a>
        <a href="/movies" className={
          `navigation__button navigation__button_type_films
          ${ !props.isLoggedIn ? "navigation__button_display-none" : "" }
          ${ props.isMoviesPage ? "navigation__button_active" : "" }`
        }>Фильмы</a>
        <a href="/saved-movies" className={
          `navigation__button navigation__button_type_saved-films
          ${ !props.isLoggedIn ? "navigation__button_display-none" : "" }
          ${ props.isSavedMoviesPage ? "navigation__button_active" : "" }`
        }>Сохранённые фильмы</a>
        <a href="/signup" className={
          `navigation__button navigation__button_type_signup
          ${ props.isLoggedIn ? "navigation__button_display-none" : "" }`
        }>Регистрация</a>
        <a href={ props.isLoggedIn ? "/profile" : "/signin" } className={
          `navigation__button navigation__button_type_signin
          ${ props.isLoggedIn ? "navigation__button_loggedIn" : "" }
          ${ !props.isLoggedIn ? "navigation__button_loggedOut" : "" }`
        }>{ props.isLoggedIn ? "Аккаунт" : "Войти"}</a>
      </nav>
    </div>
  )
}

export default Navigation;