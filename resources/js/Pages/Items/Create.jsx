import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AppHead from "@/Layouts/AppHead";
import Layout from "@/Layouts/Layout";
import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ItemCreate({ csrf_token }) {
  const { data, setData } = useForm({
    title: '',
    body: '',
    image: '',
  })
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChangeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0]);
    setData('image', e.target.files[0]);
  };

  const submit = (e) => {
    e.preventDefault();

    router.post('/items', {
      title: data.title,
      body: data.body,
      image: data.image,
      _token: csrf_token
    })
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile]);

  return (
    <Layout>
      <AppHead
        title='item create'
        desc='item create'
        image=''
      />

      <div>
        <h1 className='text-md font-bold'>Item Create</h1>
        <form onSubmit={submit}>
          <div className='flex flex-col my-4'>
            <label htmlFor='title'>title</label>
            <input
              id='title'
              type='text'
              value={data.title}
              className='w-full rounded-md'
              onChange={(e) => setData('title', e.target.value)}
            />
          </div>
          <div className='flex flex-col my-4'>
            <label htmlFor='body'>body</label>
            <textarea
              id='body'
              rows={4}
              value={data.body}
              className='w-full rounded-md'
              onChange={(e) => setData('body', e.target.value)}
            ></textarea>
          </div>
          <div className='flex flex-col my-4'>
            <label htmlFor='image'>image</label>
            <input
              id='image'
              type='file'
              onChange={(e) => handleChangeFile(e)}
            />
          </div>
          {selectedFile && <img src={preview} alt='preview' className='my-4 w-40 h-32 object-cover' />}
          <div>
            <SecondaryButton className='mr-4' onClick={() => router.get('/items')}>
              Back
            </SecondaryButton>
            <PrimaryButton type='submit'>
              SUBMIT
            </PrimaryButton>
          </div>
        </form>
      </div>
    </Layout>
  )
}
