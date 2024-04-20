import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from 'redux/selectors';

import { fetchAdverts } from 'redux/operations';
import AdvertList from 'components/AdvertsList/AdvertsList';
import css from './pages.module.css';

const Catalog = () => {
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  if (true) {
    return (
      <div className={css.wrapper}>
        <section className={css.catalog}>
          <h1 className="visually_hidden">Catalog</h1>
          <AdvertList adverts={adverts} />
        </section>
      </div>
    );
  }
};

export default Catalog;
