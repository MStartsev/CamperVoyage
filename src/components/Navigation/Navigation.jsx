import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>
      <main>
        <div>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Navigation;
