import AppHead from '@/Layouts/AppHead';
import Layout from '@/Layouts/Layout';

export default function Welcome({ item }) {
    return (
        <Layout jumbotron={true}>
            <AppHead
                title="Hello Inertia"
                desc="This is a sample application."
                image={item ? item.image_fullpath : ''}
            />
            <div
                className={`bg-jumbo flex items-center ${item ? 'text-gray-200 backdrop-blur-sm' : 'text-gray-700 bg-gradient-to-l from-stone-300 via-blue-200 to-lime-100'}`}
                style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundImage: item ? `url(${item.image_fullpath})` : '',
                }}
            >
                <div className='max-w-7xl mx-auto p-2 sm:p-4 flex justify-center sm:justify-start items-center z-20'>
                    <h1 className='text-3xl font-bold w-4/5 sm:w-1/2'>This is a sample application that is built with Laravel, Inertia, React and Vite. It's just a SPA, but it works on my VPS with SSR.</h1>
                </div>
            </div>
            <div className='max-w-7xl mx-auto p-4 sm:p-0 mt-4 sm:mt-16'>
                <div className='sm:flex sm:-mx-2'>
                    <div className='sm:w-1/2 sm:px-4 mb-8 sm:mb-0'>
                        <h2 className='text-2xl font-bold mb-4'>Anyway, what's Inertia?</h2>
                        <p>Inertia is a JavaScript library to connect backends and frontends like Laravel and React. You can implement React components insted of Blade templates in Laravel.</p>
                        <p>Also, you can use SSR is provided by Inertia on your VPS. I bet you might need a 1 CPU though.</p>
                        <p>Finally, Inertia 1.x is released. </p>
                    </div>
                    <div className='sm:w-1/2 sm:px-4'>
                        <h2 className='text-2xl font-bold mb-4'>You can see more details.</h2>
                        <tabel className='text-left w-full table-fixed break-all'>
                            <tr>
                                <th className='w-1/6'>GitHub</th>
                                <td><a href="https://github.com/kiyoshion/hello-inertia" target="_balnk" className="text-blue-500 hover:opacity-80 duration-100">https://github.com/kiyoshion/hello-inertia</a></td>
                            </tr>
                            <tr>
                                <th>Laravel</th>
                                <td><a href="https://laravel.com/docs/10.x/installation" target="_balnk" className="text-blue-500 hover:opacity-80 duration-100">https://laravel.com/docs/10.x/installation</a></td>
                            </tr>
                            <tr>
                                <th>Inertia</th>
                                <td><a href="https://inertiajs.com/" target="_balnk" className="text-blue-500 hover:opacity-80 duration-100">https://inertiajs.com/</a></td>
                            </tr>
                            <tr>
                                <th>React</th>
                                <td><a href="https://react.dev/" target="_balnk" className="text-blue-500 hover:opacity-80 duration-100">https://react.dev/</a></td>
                            </tr>
                            <tr>
                                <th>Vite</th>
                                <td><a href="https://vitejs.dev/" target="_balnk" className="text-blue-500 hover:opacity-80 duration-100">https://vitejs.dev/</a></td>
                            </tr>
                            <tr>
                                <th>PM2</th>
                                <td><a href="https://pm2.keymetrics.io/" target="_balnk" className="text-blue-500 hover:opacity-80 duration-100">https://pm2.keymetrics.io/</a></td>
                            </tr>
                            <tr>
                                <th>OGP</th>
                                <td><a href="https://web-toolbox.dev/en/tools/ogp-checker" target="_balnk" className="text-blue-500 hover:opacity-80 duration-100">https://web-toolbox.dev/en/tools/ogp-checker</a></td>
                            </tr>
                        </tabel>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
