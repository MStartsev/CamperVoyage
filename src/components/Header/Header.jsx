import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <>
      <header>
        <Navigation />
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

export default Header;
