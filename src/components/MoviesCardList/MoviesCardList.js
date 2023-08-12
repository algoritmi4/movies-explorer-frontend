import './MoviesCardList.css';
import '../../vendor/displayNone.css';

function MoviesCardList(props) {
  return (
    <section className="movies-cardlist">
      <div className={ `movies-cardlist__grid-container ${ props.isSavedMoviesPage ? "movies-cardlist__grid-container_saved-movies-page" : "" }` }>
        { props.children }
      </div>
      <button type="button" className={ `movies-cardlist__button ${ props.isSavedMoviesPage ? "display-none" : "" } ` }>Ещё</button>
    </section>
  );
}

export default MoviesCardList;