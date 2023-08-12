import './Register.css';
import logo from '../../images/logo.svg';
import AuthForm from '../AuthForm/AuthForm';
import '../Header/Header.css';

function Register(props) {
  return (
    <section className="register">
      <div className="register__container">
        <img onClick={ () => props.handleNavigate('/') } src={ logo } className="logo" alt="Логотип" />
        <h1 className="register__title">Добро пожаловать!</h1>
        <AuthForm buttonText="Зарегистрироваться" />
        <div className="register__underform-text-container">
          <p className="register__text">Уже зарегистрированы?</p>
          <span onClick={ () => props.handleNavigate('/signin') } className="register__button">Войти</span>
        </div>
      </div>
    </section>
  )
}

export default Register;