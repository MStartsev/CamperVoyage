import { useMemo, useState } from 'react';
import { FilterData } from './FilterData';
import CityAutoComplete from './CityAutoComplete/CityAutoComplete';
import DetailFilter from './DetailFilter/DetailFilter';
import FormFilter from './FormFilter/FormFilter';
import { AccentButton } from 'components/Button/Button';

const Filter = ({ adverts, setFilteredAdverts }) => {
  const filterKeys = useMemo(() => FilterData(adverts), [adverts]);

  const [selectedCity, setSelectedCity] = useState('');
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [filteredForm, setFilteredForm] = useState('');

  const handleSearch = () => {
    let filteredData = adverts;

    if (selectedCity.length > 0) {
      filteredData = filteredData.filter(advert =>
        advert.location.includes(selectedCity)
      );
    }

    console.log(filteredDetails.length, filteredData);
    if (filteredDetails.length > 0) {
      filteredData = filteredData.filter(item => {
        return filteredDetails.every(filter => {
          return item.details[filter];
        });
      });
    }

    if (filteredForm.length > 0) {
      filteredData = filteredData.filter(advert =>
        advert.form.includes(filteredForm)
      );
    }

    setFilteredAdverts(filteredData);
  };

  return (
    <div>
      <CityAutoComplete
        cities={filterKeys.location}
        onCitySelect={setSelectedCity}
      />
      <DetailFilter
        detailKeys={filterKeys.details}
        onFilterSelect={setFilteredDetails}
      />
      <FormFilter formKeys={filterKeys.form} onFilterSelect={setFilteredForm} />

      <AccentButton onClick={handleSearch}> Search </AccentButton>
    </div>
  );
};

export default Filter;
