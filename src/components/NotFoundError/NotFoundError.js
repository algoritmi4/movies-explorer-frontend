import './NotFoundError.css';

function NotFoundError(props) {
  return (
    <div className="not-found-error">
      <h2 className="not-found-error__title">404</h2>
      <p className="not-found-error__text">Страница не найдена</p>
      <button onClick={ () => props.handleNavigate('/') } className="not-found-error__exit-button">Назад</button>
    </div>
  )
}

export default NotFoundError;