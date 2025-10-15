import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 mt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
