import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={css.navigation}>
        <NavLink
          to="/"
          className={
            (css.homelink,
            ({ isActive }) =>
              `${isActive && css.activeLink} ${css.link} ${css.title}`)
          }
        >
          <span className={css.title__accent}>Camper</span>Voyage
        </NavLink>

        <ul className={css.list}>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `${isActive && css.activeLink} ${css.link}`
            }
          >
            Catalog
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${isActive && css.activeLink} ${css.link}`
            }
          >
            Favorites
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
