import React, { useState } from 'react';

const DetailFilter = ({ detailKeys, onFilterSelect }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = filter => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter(selected => selected !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updatedFilters);
  };

  const handleSearch = () => {
    onFilterSelect(selectedFilters);
  };

  return (
    <div>
      <h3>Додаткові фільтри</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {detailKeys.map(key => (
          <button
            key={key}
            style={{
              margin: '5px',
              padding: '8px 12px',
              borderRadius: '5px',
              background: selectedFilters.includes(key) ? 'blue' : 'lightgrey',
              color: selectedFilters.includes(key) ? 'white' : 'black',
              cursor: 'pointer',
              border: 'none',
            }}
            onClick={() => toggleFilter(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default DetailFilter;
