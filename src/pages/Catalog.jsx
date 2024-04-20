import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from 'redux/selectors';
import { fetchAdverts } from 'redux/operations';
import AdvertsPagination from 'components/AdvertsPagination/AdvertsPagination';
import css from './pages.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <section className={css.catalog}>
        <h1 className="visually_hidden">Catalog</h1>
        <AdvertsPagination adverts={adverts} />
      </section>
    </div>
  );
};

export default Catalog;
