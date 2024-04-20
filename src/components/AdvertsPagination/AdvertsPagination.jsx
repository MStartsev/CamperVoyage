import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import AdvertList from 'components/AdvertsList/AdvertsList';
import css from './AdvertsPagination.module.css';

const AdvertsPagination = ({ adverts }) => {
  const count = 4;
  const [loadedCount, setLoadedCount] = useState(count);
  const isLoading = useSelector(selectIsLoading);

  const handleLoadMore = () => {
    setLoadedCount(prevCount => prevCount + count);
  };

  return (
    <div className={css.wrapper}>
      <AdvertList adverts={adverts.slice(0, loadedCount)} />

      {!isLoading && loadedCount < adverts.length && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
};

export default AdvertsPagination;
