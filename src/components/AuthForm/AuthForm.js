import './AuthForm.css';
import '../../vendor/displayNone.css';

function AuthForm(props) {
  return (
      <form className="auth-form">
        <span className={ `auth-form__input-title ${ props.login && "display-none"}` }>Имя</span>
        <input type="text" className={ `auth-form__input ${ props.login && "display-none"}` } placeholder="Имя" required />
        <span className="auth-form__input-title">E-mail</span>
        <input type="email" className="auth-form__input" placeholder="email@email.ru" required />
        <span className="auth-form__input-title">Пароль</span>
        <input type="password" className="auth-form__input" placeholder="Пароль" required />
        <span className={ `auth-form__input-title auth-form__input-title_error ${ props.login && "display-none"} ${ props.login && "display-none" }` }>Что-то пошло не так...</span>
        <button className={ `auth-form__button ${ props.login && "auth-form__button_login"}` }>{ props.buttonText }</button>
      </form>
  )
}

export default AuthForm;