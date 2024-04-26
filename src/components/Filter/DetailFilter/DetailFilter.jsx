import React, { useEffect, useState } from 'react';
import capitalizeWord from 'helpers/capitalizeWord';
import sprite from 'icons/sprite.svg';
import css from './DetailFilter.module.css';

const DetailFilter = ({ detailKeys, onFilterSelect }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = filter => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter(selected => selected !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updatedFilters);
  };

  useEffect(() => {
    onFilterSelect(selectedFilters);
  }, [onFilterSelect, selectedFilters]);

  return (
    <div className={css.details_filter}>
      <div>
        <h3 className={css.subtitle}>Filters</h3>
        <h2 className={css.title}>Vehicle equipment</h2>
      </div>

      <ul className={css.details_list}>
        {detailKeys.map(key => (
          <li key={key}>
            <button
              className={`${css.details_item} ${
                selectedFilters.includes(key) ? css.details_item__selected : ''
              }`}
              onClick={() => {
                toggleFilter(key);
              }}
            >
              <svg width={32} height={32}>
                <use xlinkHref={`${sprite}#${key.toLowerCase()}`} />
              </svg>

              <span className={css.form_text}>{capitalizeWord(key)}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailFilter;
