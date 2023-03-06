import React from 'react'
import {BsMoon} from 'react-icons/bs'

const Nav = () => {
  return (
    <div className='sticky top-0 bg-pale-peach z-20'>
        <nav className="px-2 sm:px-4 py-2.5">
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex gap-2 items-center">
                    <img src="../src/assets/img/logo.png" className="h-5 sm:h-8" alt="Flowbite Logo" />
                    <span className="self-center text-title sm:text-xl text font-semibold whitespace-nowrap font-Lora font-bold ">Sushi</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center bg-pale-peach p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col items-center p-4 mt-4 sm:bg-pale-peach border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 " aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                                Popular
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                                Recently
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                            <BsMoon/> 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav