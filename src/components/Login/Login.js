import '../Register/Register.css';
import '../Header/Header.css';
import logo from '../../images/logo.svg';
import AuthForm from '../AuthForm/AuthForm';

function Login(props) {
  return (
    <section className="register">
      <div className="register__container">
        <img onClick={ () => props.handleNavigate('/') } src={ logo } className="logo" alt="Логотип" />
        <h2 className="register__title">Рады видеть!</h2>
        <AuthForm login={ true } buttonText="Войти" />
        <div className="register__underform-text-container">
          <p className="register__text">Ещё не зарегистрированы?</p>
          <span onClick={ () => props.handleNavigate('/signup') } className="register__button">Регистрация</span>
        </div>
      </div>
    </section>
  )
}

export default Login;