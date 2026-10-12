import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration, useLocation } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StickyActions from './components/layout/StickyActions';
import Loader from './components/ui/Loader';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Attractions = lazy(() => import('./pages/Attractions'));
const Tickets = lazy(() => import('./pages/Tickets'));
const Offers = lazy(() => import('./pages/Offers'));
const Gallery = lazy(() => import('./pages/Gallery'));
const SchoolPicnic = lazy(() => import('./pages/SchoolPicnic'));
const BirthdayParties = lazy(() => import('./pages/BirthdayParties'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const AdminEnquiries = lazy(() => import('./pages/AdminEnquiries'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RootLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 sm:pt-[72px]">
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><Loader text="Loading..." /></div>}>
          <div key={location.pathname} className="page-transition">
            <Outlet />
          </div>
        </Suspense>
      </main>
      <Footer />
      <StickyActions />
      <ScrollRestoration />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'attractions', element: <Attractions /> },
      { path: 'tickets', element: <Tickets /> },
      { path: 'offers', element: <Offers /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'school-picnic', element: <SchoolPicnic /> },
      { path: 'birthday-parties', element: <BirthdayParties /> },
      { path: 'haldi-parties', element: <BirthdayParties /> },
      { path: 'Haldi-parties', element: <BirthdayParties /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'contact', element: <Contact /> },
      { path: 'admin/enquiries', element: <AdminEnquiries /> },
      { path: 'admin', element: <AdminEnquiries /> },
      { path: 'enquiries', element: <AdminEnquiries /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
