import React from 'react'
import '../styles/index.css'

function Footer() {

    let links = [
        {
            name: '知識庫', 
            url: 'knowledge/1.html'
        },
        {
            name: '客戶面板', 
            url: 'https://yyjstudio.com/register'
        },
        {
            name: '服務條款',
            url: 'terms.html'
        },
    ]

    let social_links = [
        {
            name: 'Discord', 
            url: 'https://discord.com/invite/U69GRSSRZE'
        },
        {
            name: 'Github', 
            url: 'https://github.com/YYJ-Network-Studio/WDHost-Frontend'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/waterdroplet.net'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/waterdroplet_net/'
        },
    ]
    return (
        // <img src='https://yyjstudio.com/static/images/wdhost/favicon.ico' className='h-8 mr-3 rounded' alt='水滴託管 WD Host Logo' />
        <>
            <footer className='bg-white dark:bg-zinc-950'>
                <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
                    <div className='md:flex md:justify-between'>
                        <div className='mb-6 md:mb-0'>
                            <a href='https://waterdroplet.net' className='flex items-center'>
                                
                                <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>水滴託管 WD Host</span>
                            </a>
                            <p className='text-gray-300 mt-4'>服務時間：10:00 AM 至 8:00 PM</p>
                            <a href='mailto:service@waterdroplet.net' className='text-gray-300'>Email 聯絡：service@waterdroplet.net</a>
                        </div>
                        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
                            <div>
                                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>相關連結</h2>
                                <ul className='text-gray-600 dark:text-gray-400 font-medium'>
                                {links.map((link) => (
                                    <li className='mb-4'>
                                        <a href={link.url} className='hover:text-gray-100'>{link.name}</a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>社群連結</h2>
                                <ul className='text-gray-600 dark:text-gray-400 font-medium'>
                                {social_links.map((link) => (
                                    <li className='mb-4'>
                                        <a href={link.url} className='hover:text-gray-100'>{link.name}</a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
                    <div className='sm:flex sm:items-center sm:justify-between'>
                        <p className='text-gray-500 sm:text-center dark:text-gray-400'>{new Date().getFullYear()} &copy; 水滴託管 WD Host</p>
                        <p className='text-gray-500'>由 <a href='https://yyjstudio.com' className='text-gray-300 hover:text-gray-100'>YYJ Studio</a> 設計與開發此網站</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
      
export default Footer
