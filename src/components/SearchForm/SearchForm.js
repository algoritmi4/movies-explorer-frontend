import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__search">
          <input className="search-form__input" placeholder="Фильм" />
          <button type="submit" className="search-form__search-button" />
        </form>
        <FilterCheckbox />
      </div>
    </div>
  )
}

export default SearchForm;