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
            <main>
              <Login handleNavigate={ handleNavigate }/>
            </main>
          } />
          <Route path='/signup' element={
            <main>
              <Register handleNavigate={ handleNavigate }/>
            </main>
          } />
          <Route path='/movies' element={
            <>
              <Header
                isLoggedIn={ true }
                isMoviesPage={ true }
                handleNavigate={ handleNavigate }
              />
              <main>
                <SearchForm />
                <MoviesCardList children={
                  <>
                    <MoviesCard photo={ photo1 } filmDuration={ filmDuration } filmTitle="33 слова о дизайне" isCardSaved={ true } isSavedMoviesPage={ false } alt={ "Постер к фильму 33 слова о дизайне" } />
                    <MoviesCard photo={ photo2 } filmDuration={ filmDuration } filmTitle="Киноальманах «100 лет дизайна»" isCardSaved={ true } isSavedMoviesPage={ false } alt={ "Постер к фильму Киноальманах «100 лет дизайна»" } />
                    <MoviesCard photo={ photo3 } filmDuration={ filmDuration } filmTitle="В погоне за Бенкси" isCardSaved={ true } isSavedMoviesPage={ false } alt={ "Постер к фильму В погоне за Бенкси" } />
                    <MoviesCard photo={ photo4 } filmDuration={ filmDuration } filmTitle="Баския: Взрыв реальности" isCardSaved={ false } isSavedMoviesPage={ false } alt={ "Постер к фильму Баския: Взрыв реальности" } />
                    <MoviesCard photo={ photo5 } filmDuration={ filmDuration } filmTitle="Бег это свобода" isCardSaved={ false } isSavedMoviesPage={ false } alt={ "Постер к фильму Бег это свобода" } />
                    <MoviesCard photo={ photo6 } filmDuration={ filmDuration } filmTitle="Книготорговцы" isCardSaved={ false } isSavedMoviesPage={ false } alt={ "Постер к фильму Книготорговцы" } />
                    <MoviesCard photo={ photo7 } filmDuration={ filmDuration } filmTitle="Когда я думаю о Германии ночью" isCardSaved={ false } isSavedMoviesPage={ false } alt={ "Постер к фильму Когда я думаю о Германии ночью" } />
                    <MoviesCard photo={ photo8 } filmDuration={ filmDuration } filmTitle="Gimme Danger: История Игги и The Stooges" isCardSaved={ false } isSavedMoviesPage={ false } alt={ "Постер к фильму Gimme Danger: История Игги и The Stooges" } />
                    <MoviesCard photo={ photo9 } filmDuration={ filmDuration } filmTitle="Дженис: Маленькая девочка грустит" isCardSaved={ false } isSavedMoviesPage={ false } alt={ "Постер к фильму Дженис: Маленькая девочка грустит" } />
                    <MoviesCard photo={ photo10 } filmDuration={ filmDuration } filmTitle="Соберись перед прыжком" isCardSaved={ false } isSavedMoviesPage={ false } alt={ "Постер к фильму Соберись перед прыжком" } />
                    <MoviesCard photo={ photo11 } filmDuration={ filmDuration } filmTitle="Пи Джей Харви: A dog called money" isCardSaved={ false } isSavedMoviesPage={ false } alt={ "Постер к фильму Пи Джей Харви: A dog called money" } />
                    <MoviesCard photo={ photo12 } filmDuration={ filmDuration } filmTitle="По волнам: Искусство звука в кино" isCardSaved={ false } isSavedMoviesPage={ false } alt={ `Постер к фильму По волнам: Искусство звука в кино` } />
                  </>
                } />
              </main>
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
              <main>
                <SearchForm />
                <MoviesCardList isSavedMoviesPage={ true } children={
                  <>
                    <MoviesCard photo={ photo1 } filmDuration={ filmDuration } filmTitle="33 слова о дизайне" isCardSaved={ true } isSavedMoviesPage={ true } alt={ "Постер к фильму 33 слова о дизайне" } />
                    <MoviesCard photo={ photo2 } filmDuration={ filmDuration } filmTitle="Киноальманах «100 лет дизайна»" isCardSaved={ true } isSavedMoviesPage={ true } alt={ "Постер к фильму Киноальманах «100 лет дизайна»" } />
                    <MoviesCard photo={ photo3 } filmDuration={ filmDuration } filmTitle="В погоне за Бенкси" isCardSaved={ true } isSavedMoviesPage={ true } alt={ "Постер к фильму В погоне за Бенкси" } />
                  </>
                } />
              </main>
              <Footer />
            </>
          } />
          <Route path='/profile' element={
            <>
              <Header
                isLoggedIn={ true }
                handleNavigate={ handleNavigate }
              />
              <main>
                <Profile handleNavigate={ handleNavigate } />
              </main>
            </>
          } />
          <Route path='*' element={
            <main>
              <NotFoundError handleNavigate={ handleNavigate } />
            </main>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
