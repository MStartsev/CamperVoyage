import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';

import AdvertList from 'components/AdvertsList/AdvertsList';
import css from './pages.module.css';

const Favorites = () => {
  const { favorites } = useSelector(selectFavorites);

  return (
    <div className={css.wrapper}>
      <section className={css.catalog}>
        <h1 className="visually_hidden">Favorites</h1>
        <AdvertList adverts={favorites} />
      </section>
    </div>
  );
};

export default Favorites;
