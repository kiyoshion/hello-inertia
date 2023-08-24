import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AppHead from "@/Layouts/AppHead";
import Layout from "@/Layouts/Layout";
import { router } from "@inertiajs/react";

export default function ItemShow({ item, auth }) {
  return (
    <Layout>
      <AppHead
        title={`${item.title} - detail`}
        desc={`${item.title}. This is a detail page for ${item.title}.`}
        image={item.image_fullpath}
      />
      <div>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-xl font-bold mb-2'>{item.title}</h1>
          {auth.user && item.user_id === auth.user.id && (
            <div className=''>
              <PrimaryButton onClick={() => router.get(`/items/${item.id}/edit`)} className='mr-4'>
                Edit
              </PrimaryButton>
              <SecondaryButton onClick={() => router.delete(`/items/${item.id}`)}>
                Delete
              </SecondaryButton>
            </div>
          )}
        </div>
        <div>
          <img src={item.image_fullpath} alt={item.title} className='mb-4' />
          <p>{item.body}</p>
        </div>
        <div>
          <SecondaryButton className='mt-4' onClick={() => router.get('/items')}>
            Back
          </SecondaryButton>
        </div>
      </div>
    </Layout>
  )
}
