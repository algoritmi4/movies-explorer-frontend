import './AuthForm.css';
import '../../vendor/displayNone.css';

function AuthForm(props) {
  return (
      <form className="auth-form">
        <label className={ `auth-form__input-title ${ props.login && "display-none"}` }>Имя</label>
        <input type="text" className={ `auth-form__input ${ props.login && "display-none"}` } placeholder="Имя" minLength="2" maxLength="30" required />
        <label className={ `auth-form__input-title ${ props.login && "auth-form__input-title_none-margin"}` }>E-mail</label>
        <input type="email" className="auth-form__input" placeholder="email@email.ru" required />
        <label className="auth-form__input-title">Пароль</label>
        <input type="password" className="auth-form__input" placeholder="Пароль" minLength="2" maxLength="30" required />
        <span className={ `auth-form__input-title auth-form__input-title_error ${ props.login && "display-none"} ${ props.login && "display-none" }` }>Что-то пошло не так...</span>
        <button type="submit" className={ `auth-form__button ${ props.login && "auth-form__button_login"}` }>{ props.buttonText }</button>
      </form>
  )
}

export default AuthForm;