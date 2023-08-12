import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <div className="search-form__search">
          <input className="search-form__input" placeholder="Фильм" required />
          <button type="submit" className="search-form__search-button" />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;