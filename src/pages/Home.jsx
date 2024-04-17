import { Link } from 'react-router-dom';
import css from './pages.module.css';

const Home = () => {
  return (
    <div className={css.wrapper}>
      <section className={css.homepage}>
        <div className={css.container}>
          <div className={css.text_wrapper}>
            <h1 className={css.title}>Rent a camper!</h1>
            <p className={css.homepage_text}>
              Ready to escape the ordinary and embrace the extraordinary? Rent a
              camper today and set forth on a journey filled with endless
              possibilities and boundless adventures. Your next great outdoor
              escapade awaits!
            </p>
            <Link to="/catalog" className={css.button_link}>
              Book now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
