import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox"> 
      <label className="filter-checkbox__label" htmlFor="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__checkbox" id="filter-checkbox__label" />
        <span className="filter-checkbox__pseudo-item"></span>
        <h2 className="filter-checkbox__label-text">Короткометражки</h2>
      </label>
    </div>
  );
}

export default FilterCheckbox;
