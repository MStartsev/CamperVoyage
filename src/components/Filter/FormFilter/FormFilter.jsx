import React, { useEffect, useState } from 'react';
import capitalizeWord from 'helpers/capitalizeWord';
import sprite from 'icons/sprite.svg';
import css from './FormFilter.module.css';

const FormFilter = ({ formKeys, onFilterSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const toggleFilter = filter => {
    setSelectedFilter(prevFilter => (prevFilter === filter ? '' : filter));
  };

  useEffect(() => {
    onFilterSelect(selectedFilter ? [selectedFilter] : []);
  }, [onFilterSelect, selectedFilter]);

  return (
    <div className={css.form_filter}>
      <h2 className={css.title}>Vehicle type</h2>
      <ul className={css.form_list}>
        {formKeys.map(key => (
          <li key={key}>
            <buttonas
              className={`${css.form_item} ${
                key === selectedFilter ? css.form_item__selected : ''
              }`}
              onClick={() => {
                toggleFilter(key);
              }}
            >
              <svg width={32} height={32}>
                <use xlinkHref={`${sprite}#${key.toLowerCase()}`} />
              </svg>

              <span className={css.form_text}>{capitalizeWord(key)}</span>
            </buttonas>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormFilter;
