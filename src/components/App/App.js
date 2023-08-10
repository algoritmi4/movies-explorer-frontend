import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundError from '../NotFoundError/NotFoundError';
import MoviesCard from '../MoviesCard/MoviesCard';
import photo1 from '../../images/photo1.jpg';
import photo2 from '../../images/photo2.jpg';
import photo3 from '../../images/photo3.jpg';
import photo4 from '../../images/photo4.jpg';
import photo5 from '../../images/photo5.jpg';
import photo6 from '../../images/photo6.jpg';
import photo7 from '../../images/photo7.jpg';
import photo8 from '../../images/photo8.jpg';
import photo9 from '../../images/photo9.jpg';
import photo10 from '../../images/photo10.jpg';
import photo11 from '../../images/photo11.jpg';
import photo12 from '../../images/photo12.jpg';
const filmDuration = "1ч 17м";

function App() {
  const navigate = useNavigate();

  function handleNavigate(route) {
    navigate(route);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path='/' element={
            <>
              <Header
                isLoggedIn={ false }
                handleNavigate={ handleNavigate }
              />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/signin' element={
            <>
              <Login handleNavigate={ handleNavigate }/>
            </>
          } />
          <Route path='/signup' element={
            <>
              <Register handleNavigate={ handleNavigate }/>
            </>
          } />
          <Route path='/movies' element={
            <>
              <Header
                isLoggedIn={ true }
                isMoviesPage={ true }
                handleNavigate={ handleNavigate }
              />
              <SearchForm />
              <MoviesCardList children={
                <>
                  <MoviesCard photo={ photo1 } filmDuration={ filmDuration } filmTitle="33 слова о дизайне" isCardSaved={ true } />
                  <MoviesCard photo={ photo2 } filmDuration={ filmDuration } filmTitle="Киноальманах «100 лет дизайна»" isCardSaved={ true } />
                  <MoviesCard photo={ photo3 } filmDuration={ filmDuration } filmTitle="В погоне за Бенкси" isCardSaved={ true } />
                  <MoviesCard photo={ photo4 } filmDuration={ filmDuration } filmTitle="Баския: Взрыв реальности" isCardSaved={ false } />
                  <MoviesCard photo={ photo5 } filmDuration={ filmDuration } filmTitle="Бег это свобода" isCardSaved={ false } />
                  <MoviesCard photo={ photo6 } filmDuration={ filmDuration } filmTitle="Книготорговцы" isCardSaved={ false } />
                  <MoviesCard photo={ photo7 } filmDuration={ filmDuration } filmTitle="Когда я думаю о Германии ночью" isCardSaved={ false } />
                  <MoviesCard photo={ photo8 } filmDuration={ filmDuration } filmTitle="Gimme Danger: История Игги и The Stooges" isCardSaved={ false } />
                  <MoviesCard photo={ photo9 } filmDuration={ filmDuration } filmTitle="Дженис: Маленькая девочка грустит" isCardSaved={ false } />
                  <MoviesCard photo={ photo10 } filmDuration={ filmDuration } filmTitle="Соберись перед прыжком" isCardSaved={ false } />
                  <MoviesCard photo={ photo11 } filmDuration={ filmDuration } filmTitle="Пи Джей Харви: A dog called money" isCardSaved={ false } />
                  <MoviesCard photo={ photo12 } filmDuration={ filmDuration } filmTitle="По волнам: Искусство звука в кино" isCardSaved={ false } />
                </>
              } />
              <Footer />
            </>
          } />
          <Route path='/saved-movies' element={
            <>
              <Header
                isLoggedIn={ true }
                isSavedMoviesPage={ true }
                handleNavigate={ handleNavigate }
              />
              <SearchForm />
              <MoviesCardList isSavedMoviesPage={ true } children={
                <>
                  <MoviesCard photo={ photo1 } filmDuration={ filmDuration } filmTitle="33 слова о дизайне" isCardSaved={ true } isSavedMoviesPage={ true } />
                  <MoviesCard photo={ photo2 } filmDuration={ filmDuration } filmTitle="Киноальманах «100 лет дизайна»" isCardSaved={ true } isSavedMoviesPage={ true } />
                  <MoviesCard photo={ photo3 } filmDuration={ filmDuration } filmTitle="В погоне за Бенкси" isCardSaved={ true } isSavedMoviesPage={ true } />
                </>
              } />
              <Footer />
            </>
          } />
          <Route path='/profile' element={
            <>
                <Header
                  isLoggedIn={ true }
                  handleNavigate={ handleNavigate }
                />
                <Profile handleNavigate={ handleNavigate } />
            </>
          } />
          <Route path='*' element={
            <>
              <NotFoundError handleNavigate={ handleNavigate } />
            </>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
