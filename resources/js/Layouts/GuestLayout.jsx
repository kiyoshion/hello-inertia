import Navbar from './Navbar';

export default function Guest({ children }) {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Navbar />
            <div className="flex flex-col min-h-screen sm:justify-center items-center mt-6">
                <div className="w-full sm:max-w-md  px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div className="">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
