import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from 'redux/selectors';
import { fetchAdverts } from 'redux/operations';
import AdvertsPagination from 'components/AdvertsPagination/AdvertsPagination';
import Filter from 'components/Filter/Filter';
import { FilterData } from 'components/Filter/FilterData';
import css from './pages.module.css';

const Catalog = () => {
  const [filteredAdverts, setFilteredAdverts] = useState(null);

  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  if (true) {
    console.log(filteredAdverts);
  }

  return (
    <div className={css.wrapper}>
      <section className={css.filter}>
        <h1 className="visually_hidden">Filter</h1>
        <Filter adverts={adverts} setFilteredAdverts={setFilteredAdverts} />
      </section>

      <section className={css.catalog}>
        <h1 className="visually_hidden">Catalog</h1>
        <AdvertsPagination adverts={filteredAdverts || adverts} />
      </section>
    </div>
  );
};

export default Catalog;
