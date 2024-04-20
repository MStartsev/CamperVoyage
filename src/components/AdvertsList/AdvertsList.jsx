import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import AdvertItem from './AdvertItem/AdvertItem';
import css from './AdvertList.module.css';

const AdvertList = ({ adverts }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <p>Error!</p>
      </>
    );
  }

  return (
    <ul className={css.list}>
      {adverts && adverts?.length > 0 ? (
        adverts.map(card => <AdvertItem key={card.id} card={card} />)
      ) : (
        <p>No advertisements found</p>
      )}
    </ul>
  );
};

export default AdvertList;
