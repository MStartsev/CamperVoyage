import { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from 'redux/selectors';
import css from './Filter.module.css';
import { FilterData } from './FilterData';
import CityAutoComplete from './CityAutoComplete/CityAutoComplete';
import DetailFilter from './DetailFilter/DetailFilter';

const SearchButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Search
    </button>
  );
};

const Filter = ({ setFilteredAdverts }) => {
  const adverts = useSelector(selectAdverts);
  const filterKeys = useMemo(() => FilterData(adverts), [adverts]);

  const [selectedCity, setSelectedCity] = useState('');
  const [searchDisabled, setSearchDisabled] = useState(true);

  const handleSearch = () => {
    console.log(selectedCity);
    if (selectedCity.length > 0) {
      const filteredData = adverts.filter(vehicle =>
        vehicle.location.includes(selectedCity)
      );
      setFilteredAdverts(filteredData);
    } else {
      setFilteredAdverts(null); // Очищуємо фільтровані дані
    }
  };

  useEffect(() => {
    setSearchDisabled(selectedCity.length === 0);
    if (selectedCity.length === 0) setFilteredAdverts(null);
  }, [selectedCity, setFilteredAdverts]);

  return (
    <div>
      <CityAutoComplete
        cities={filterKeys.location}
        onCitySelect={setSelectedCity}
      />
      <DetailFilter detailKeys={filterKeys.details} />
      <SearchButton onClick={handleSearch} disabled={searchDisabled} />
    </div>
  );
};

export default Filter;
