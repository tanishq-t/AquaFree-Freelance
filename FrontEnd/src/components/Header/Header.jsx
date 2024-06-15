import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
        <header class="text-gray-400 bg-gray-900 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Adura</span>
            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-10 hover:text-white hover:cursor-pointer">Advertise</a>
              <a class="mr-10 hover:text-white hover:cursor-pointer">Distribute</a>
              <a class="mr-10 hover:text-white hover:cursor-pointer">Hall of Fame</a>
              <a class="mr-10 hover:text-white hover:cursor-pointer">FAQ</a>
            </nav>
            <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Contact Us
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
    </div>
  )
}

export default Header
