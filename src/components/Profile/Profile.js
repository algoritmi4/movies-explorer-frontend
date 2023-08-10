import './Profile.css';

function Profile(props) {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <div className="profile__info-container">
        <p className="profile__name">Имя</p>
        <p className="profile__value">Виталий</p>
      </div>
      <div className="profile__info-container">
        <p className="profile__name">E-mail</p>
        <p className="profile__value">pochta@yandex.ru</p>
      </div>
      <div className="profile__button-container">
        <button className="profile__edit-button">Редактировать</button>
        <button onClick={ () => props.handleNavigate('/') } className="profile__exit-button">Выйти из аккаунта</button>
      </div>
    </div>
  )
}

export default Profile;