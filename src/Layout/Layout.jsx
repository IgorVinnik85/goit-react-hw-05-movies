import Home from 'pages/Home/Home';
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Home />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
