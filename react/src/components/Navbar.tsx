import React from 'react';
import { useState } from 'react';
// components and styles
import '../styles/index.css';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  let links = [
        {name: '首頁', url: '/'},
        {name: '知識庫', url: 'knowledge/1.html'},
    ]

  return (
    <>
        <nav className="bg-white dark:bg-zinc-950 w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://waterdroplet.net" className="flex items-center">
                    <img src="src/assets/favicon.ico" className="h-8 mr-3 rounded" alt="水滴託管 WD Host Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">水滴託管 WD Host</span>
                </a>
                        
                <div className="flex md:order-2">
                    <a href="https://yyjstudio.com/register">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                            font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700
                            dark:focus:ring-blue-800 ml-5">客戶面板
                        </button>
                    </a>
                    
                    <button
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
                        focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
                        dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                        onClick={toggleMenu}><i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                <div className={`items-center ml-auto w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row 
                    md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-zinc-950 md:dark:bg-zinc-950 dark:bg-zinc-950">
                        {links.map((link) => (
                            <li>
                                <a href={link.url} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white 
                                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
