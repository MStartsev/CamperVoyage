import AdvertList from 'components/AdvertsList/AdvertsList';
import css from './pages.module.css';

const Catalog = () => {
  return (
    <div className={css.wrapper}>
      <section className={css.catalog}>
        <h1>Catalog</h1>
        <AdvertList />
      </section>
    </div>
  );
};

export default Catalog;
