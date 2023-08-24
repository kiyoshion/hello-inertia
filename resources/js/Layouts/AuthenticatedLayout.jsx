import Footer from './Footer';
import Navbar from './Navbar';

export default function Authenticated({ children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
