import Footer from './Footer';
import Navbar from './Navbar';

export default function Authenticated({ children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className='max-w-7xl w-full mx-auto p-4'>{children}</main>
            <Footer />
        </div>
    );
}
