import PrimaryButton from "@/Components/PrimaryButton";
import AppHead from "@/Layouts/AppHead";
import Layout from "@/Layouts/Layout";
import { Link, router } from "@inertiajs/react";

export default function ItemIndex({ items }) {
  return (
    <Layout>
      <AppHead
        title='items page'
        desc='This is items page.'
        image={items[0] ? `${items[0].image_fullpath}` : ''}
      />
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-lg font-bold'>Items</h1>
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
    </Layout>
  )
}
