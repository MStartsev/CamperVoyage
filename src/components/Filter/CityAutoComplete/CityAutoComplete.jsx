import { useState, useEffect, useRef } from 'react';
import sprite from 'icons/sprite.svg';
import css from './CityAutoComplete.module.css';

const CityAutoComplete = ({ cities, onCitySelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [inputCleared, setInputCleared] = useState(false);
  const inputRef = useRef(null);

  const handleChange = e => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    if (inputValue.length > 0) {
      const matchedCities = cities.filter(city =>
        city.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(matchedCities);
      setCityNotFound(false);
      setInputCleared(false);
    } else {
      setSuggestions(cities);
      setCityNotFound(false);
      setInputCleared(true);
      onCitySelect([]);
    }
  };

  const handleSuggestionClick = city => {
    setInputValue(city);
    setSuggestions([]);
    setCityNotFound(false);
    onCitySelect(city);
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      setSuggestions([]);
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = e => {
    if (!inputRef.current.contains(e.target)) {
      setSuggestions([]);
    }
  };

  const handleBlur = () => {
    if (inputValue.length > 0 && !suggestions.includes(inputValue)) {
      setCityNotFound(true);
    }
  };

  return (
    <div className={css.location} ref={inputRef}>
      <h3 className={css.title}>Location</h3>
      <div className={css.wrapper}>
        <svg className={css.icon} width={18} height={20}>
          <use xlinkHref={`${sprite}#geo`} />
        </svg>
        <input
          className={css.input_location}
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder="City"
        />
        {suggestions.length > 0 && (
          <ul className={css.list}>
            {suggestions.map((city, index) => (
              <li
                key={index}
                className={css.item}
                onClick={() => handleSuggestionClick(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
        {cityNotFound && !inputCleared && (
          <p style={{ color: 'red' }}>Місто відсутнє</p>
        )}
      </div>
    </div>
  );
};

export default CityAutoComplete;
