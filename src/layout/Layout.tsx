import { Outlet } from 'react-router-dom';

import { Header } from '@/layout';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main>
        <div className="container mx-auto p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
