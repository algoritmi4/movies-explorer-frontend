import './MoviesCard.css';

function MoviesCard(props) {
  const isSavedIconNeed = props.isCardSaved && !props.isSavedMoviesPage;

  return (
    <div className="movies-card">
      <img src={ props.photo } className="movies-card__image" alt="Постер к фильму" />
      <div className={
        `movies-card__save-condition
        ${ isSavedIconNeed && "movies-card__save-condition_saved" }
        ${ props.isSavedMoviesPage && "movies-card__save-condition_saved-movies-page"}`
      }>{ props.isCardSaved ? "" : "Сохранить" }</div>
      <div className="movies-card__description">
        <h2 className="movies-card__film-title">{ props.filmTitle }</h2>
        <time className="movies-card__film-duration">{ props.filmDuration }</time>
      </div>
    </div>
  );
}

export default MoviesCard;