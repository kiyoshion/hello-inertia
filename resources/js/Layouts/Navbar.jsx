import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import { Link, router, usePage } from "@inertiajs/react";

export default function Navbar() {
  const { auth, csrf_token } = usePage().props

  return (
    <nav className='bg-white'>
      <div className='flex items-center justify-between max-w-7xl mx-auto py-2'>
        <Link href='/' className='inline-flex items-center px-3 py-2 border border-transparent leading-4 rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 font-bold'>
          <ApplicationLogo with={24} height={24} className='mr-2' />
          {import.meta.env.VITE_APP_NAME}
        </Link>
        <div className='flex items-center'>
          <Link href='/items' className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'>Items</Link>
          {auth.user ?
            <div className="sm:flex sm:items-center sm:ml-6">
              <div className="ml-3 relative">
                  <Dropdown>
                      <Dropdown.Trigger>
                          <span className="inline-flex rounded-md">
                              <button
                                  type="button"
                                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                              >
                                  {auth.user.name}

                                  <svg
                                      className="ml-2 -mr-0.5 h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              </button>
                          </span>
                      </Dropdown.Trigger>

                      <Dropdown.Content>
                          <Dropdown.Link href={route('dashboard')}>Dashboard</Dropdown.Link>
                          <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                          <button
                            onClick={() => router.post('/logout', { _token: csrf_token })}
                            className='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out '
                          >
                              Log Out
                          </button>
                      </Dropdown.Content>
                  </Dropdown>
              </div>
          </div>
          : (
            <>
              <Link href='/login' className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'>Login</Link>
              <Link href='/register' className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
