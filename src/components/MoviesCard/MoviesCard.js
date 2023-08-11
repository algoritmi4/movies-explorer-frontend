import './MoviesCard.css';

function MoviesCard(props) {
  const isSavedIconNeed = props.isCardSaved && !props.isSavedMoviesPage;

  return (
    <div className="movies-card">
      <img src={ props.photo } className="movies-card__image" alt={ props.alt } />
      <button type="button" className={
        `movies-card__save-condition
        ${ isSavedIconNeed && "movies-card__save-condition_saved" }
        ${ props.isSavedMoviesPage && "movies-card__save-condition_saved-movies-page"}`
      }>{ props.isCardSaved ? "" : "Сохранить" }</button>
      <div className="movies-card__description">
        <h2 className="movies-card__film-title">{ props.filmTitle }</h2>
        <p className="movies-card__film-duration">{ props.filmDuration }</p>
      </div>
    </div>
  );
}

export default MoviesCard;