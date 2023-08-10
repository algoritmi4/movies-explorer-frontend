import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox"> 
      <label className="filter-checkbox__label" htmlFor="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__checkbox" id="filter-checkbox__label" />
        <span className="filter-checkbox__pseudo-item"></span>
        <span className="filter-checkbox__label-text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
