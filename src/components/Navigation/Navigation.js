import * as React from 'react';
import '../../vendor/displayNone.css';
import './Navigation.css';

function Navigation(props) {
  const isPullOutMenuNeed = props.isLoggedIn && !props.isPullOutMenuOpen;

  return (
    <div className={ `navigation ${ props.isPullOutMenuOpen && "navigation_blackout-background" }` }>
      <nav className={ `navigation__container ${ props.isLoggedIn && "navigation__container_pull-out-menu_open" } ${ isPullOutMenuNeed && "navigation__container_pull-out-menu_close"}` }>
        <button onClick={ props.handlePullOutMenuOpen } type="button" className={
          `navigation__cross
          ${ !props.isLoggedIn && "navigation__cross_mobile-display-none" }`
        }></button>
        <button onClick={ () => props.handleNavigate('/') } type="button" className={
          `navigation__button navigation__button_type_main-link
          ${ !props.isLoggedIn && "navigation__button_mobile-display-none" }`
        }>Главная</button>
        <button onClick={ () => props.handleNavigate('/movies') } type="button" className={
          `navigation__button navigation__button_type_films
          ${ !props.isLoggedIn && "display-none" }
          ${ props.isMoviesPage && "navigation__button_active"}`
        }>Фильмы</button>
        <button onClick={ () => props.handleNavigate('/saved-movies') } type="button" className={
          `navigation__button navigation__button_type_saved-films
          ${ !props.isLoggedIn && "display-none" }
          ${ props.isSavedMoviesPage && "navigation__button_active" }`
        }>Сохранённые фильмы</button>
        <button onClick={ () => props.handleNavigate('/signup') } type="button" className={
          `navigation__button navigation__button_type_signup
          ${ props.isLoggedIn && "display-none" }`
        }>Регистрация</button>
        <button onClick={ props.isLoggedIn ? () => props.handleNavigate('/profile') : () => props.handleNavigate('/signin') } type="button" className={
          `navigation__button navigation__button_type_signin
          ${ props.isLoggedIn && "navigation__button_loggedIn" }
          ${ !props.isLoggedIn && "navigation__button_loggedOut" }`
        }>{ props.isLoggedIn ? "Аккаунт" : "Войти"}</button>
      </nav>
    </div>
  )
}

export default Navigation;