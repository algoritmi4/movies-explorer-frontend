import './MoviesCardList.css';
import '../../vendor/displayNone.css';

function MoviesCardList(props) {
  return (
    <div className="movies-cardlist">
      <div className="movies-cardlist__grid-container">
        { props.children }
      </div>
      <button className={`movies-cardlist__button ${ props.isSavedMoviesPage && "display-none"}`}>Ещё</button>
    </div>
  );
}

export default MoviesCardList;