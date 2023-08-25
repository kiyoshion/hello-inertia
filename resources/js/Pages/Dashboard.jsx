import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Dashboard({ auth, items }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <h1 className="font-bold text-xl my-4">Hello {auth.user.name}!</h1>

            <div className='flex items-center justify-between mb-2'>
                <h2 className='font-bold text-lg'>Items</h2>
                <PrimaryButton onClick={() => router.get('/items/create')}>
                    Create
                </PrimaryButton>
            </div>

            <div className='flex flex-wrap sm:flex-wrap -mx-2'>
                {items[0] ?
                    items.map((item) => (
                        <div key={item.id} className='w-1/2 sm:w-1/3 md:w-1/4 p-2'>
                        <Link href={`/items/${item.id}`}>
                            <img src={item.thumbnail_fullpath} alt={item.title} className='w-full h-40 sm:h-48 object-cover' />
                            { item.title }
                        </Link>
                        </div>
                    ))
                :
                    <div className="p-2">
                        <h2 className="text-2xl font-bold">No items yet. &#128118;</h2>
                    </div>
                }
            </div>
        </AuthenticatedLayout>
    );
}
