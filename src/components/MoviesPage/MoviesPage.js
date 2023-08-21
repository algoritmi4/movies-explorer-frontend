import * as React from 'react';
import '../Main/Main.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Notification from '../Notification/Notification';

function MoviesPage(props) {
  React.useEffect(() => {
    props.handleSavedMoviesData();
    props.handleResize();

    window.addEventListener('resize', props.handleResize);

    return () => window.removeEventListener('resize', props.handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <>
      <Header
        isLoggedIn={ props.isLoggedIn }
        isMoviesPage={ true }
        handleNavigate={ props.handleNavigate }
      />
      <main className="content">
        <Notification notification={ props.notification } />
        <SearchForm
          moviesInputValue={ props.moviesInputValue }
          setMoviesInputValue={ props.setMoviesInputValue }
          onSubmitSearchForm={ props.onSubmitSearchForm }
          setIsPreloaderActive={ props.setIsPreloaderActive }
          setCheckboxCondition={ props.setCheckboxCondition }
          savedMoviesData={ props.savedMoviesData }
          checkboxCondition={ props.checkboxCondition }
        />
        <MoviesCardList
          moviesInputValue={ props.moviesInputValue }
          shownMovies={ props.checkboxCondition ? props.shownMoviesArray.filter((movie) => movie["duration"] <= 40) : props.shownMovies }
          isPreloaderActive={ props.isPreloaderActive }
          notFoundMoviesText={ props.notFoundMoviesText }
          checkboxCondition={ props.checkboxCondition }
          handleMovieLike={ props.handleMovieLike }
          handleAddMovies={ props.handleAddMovies }
          shownMoviesQuantity={ props.shownMoviesQuantity }
          shownMoviesArray={ props.shownMoviesArray }
          savedMoviesData={ props.savedMoviesData }
        />
      </main>
      <Footer />
    </>
  )
}

export default MoviesPage;