import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__container">
        <div className="search-form__search">
          <input className="search-form__input" placeholder="Фильм" required />
          <button type="submit" className="search-form__search-button" />
        </div>
        <FilterCheckbox />
      </form>
    </div>
  )
}

export default SearchForm;