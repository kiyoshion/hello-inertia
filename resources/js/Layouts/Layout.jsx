import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children, jumbotron = false }) {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Navbar />
      <main className={`max-w-7xl w-full mx-auto ${jumbotron ? 'max-w-full p-0' : 'p-4'}`}>{children}</main>
      <Footer />
    </div>
  );
}
