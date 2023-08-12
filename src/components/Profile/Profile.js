import * as React from 'react';
import './Profile.css';

function Profile(props) {
  const [ nameInputText, setNameInputText ] = React.useState("Виталий");
  const [ emailInputText, setEmailInputText ] = React.useState("pochta@yandex.ru");
  const [ isInputsActive, setIsInputsActive ] = React.useState(false);

  function handleNameInputText(e) {
    setNameInputText(e.target.value);
  }

  function handleEmailInputText(e) {
    setEmailInputText(e.target.value);
  }

  function handleInputsActive() {
    setIsInputsActive(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsInputsActive(false);
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form" onSubmit={ handleSubmit }>
        <div className="profile__info-container">
          <label className="profile__name">Имя</label>
          <input
            type="text"
            onChange={ handleNameInputText }
            value={ nameInputText }
            className={ `profile__input ${ isInputsActive ? "profile__input_active" : "" }` }
            minLength="2"
            maxLength="30"
            placeholder="Имя"
            required
            readOnly={ isInputsActive ? false : true }
          />
        </div>
        <div className="profile__info-container">
          <label className="profile__name">E-mail</label>
          <input
            type="email"
            onChange={ handleEmailInputText }
            value={ emailInputText }
            className={ `profile__input ${ isInputsActive ? "profile__input_active" : "" }` }
            minLength="2"
            maxLength="30"
            placeholder="Email"
            required
            readOnly={ isInputsActive ? false : true }
          />
        </div>
        <button type="submit" className={ `profile__save-button ${ isInputsActive ? "profile__save-button_active" : "" }` }>Сохранить</button>
      </form>
      <div className="profile__button-container">
        <button type="button" onClick={ handleInputsActive } className={ `profile__edit-button ${ isInputsActive ? "profile__edit-button_display-none" : ""}` }>Редактировать</button>
        <button type="button" onClick={ () => props.handleNavigate('/') } className={ `profile__exit-button ${ isInputsActive ? "profile__exit-button_display-none" : ""}` }>Выйти из аккаунта</button>
      </div>
    </section>
  )
}

export default Profile;