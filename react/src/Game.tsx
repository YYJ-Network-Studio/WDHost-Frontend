import React from 'react';
// components and styles
import './styles/index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PricingCaclulator from './components/PricingCalculator';

let favorites = [
    {
        name: '入門型',
        desc: '適合單分流 15 人左右的插件伺服器。',
        price: '$620',
        features: ['2 vCPU、8GB RAM、80GB HDD', '協助伺服器轉移', 'Minecraft 相關技術諮詢'],
    },
    {
        name: '進階型',
        desc: '適合雙分流 30 人左右的插件伺服器。',
        price: '$1080',
        features: ['4 vCPU、16GB RAM、160GB HDD', '協助伺服器轉移', 'Minecraft 相關技術諮詢'],
    },
    {
        name: '專業型',
        desc: '適合大型 50 人左右的多分流伺服器。',
        price: '$1580',
        features: ['6 vCPU、24GB RAM、320GB HDD', '協助伺服器轉移', 'Minecraft 相關技術諮詢'],
    }
]

let plans = [
    {
        id: 'TW-Game-1',
        space: '2C / 4G RAM / 40G HDD',
        price: '$420',
        url: '',
    },
    {
        id: 'TW-Game-2',
        space: '2C / 8G RAM / 80G HDD',
        price: '$620',
        url: '',
    },
    {
        id: 'TW-Game-3',
        space: '4C / 8G RAM / 160G HDD',
        price: '$680',
        url: '',
    },
    {
        id: 'TW-Game-4',
        space: '4C / 16G RAM / 160G HDD',
        price: '$1080',
        url: '',
    },
    {
        id: 'TW-Game-5',
        space: '6C / 24G RAM / 320G HDD',
        price: '$1580',
        url: '',
    },
]

function Index() {

    return (
        <>
            <Navbar />
            <section className="bg-white dark:bg-neutral-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"></h2> */}
                        {/* <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"></p> */}
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {favorites.map((favorite) => (
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-neutral-500 xl:p-8 dark:bg-neutral-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">{favorite.name}</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{favorite.desc}</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">{favorite.price}</span>
                                <span className="text-gray-500 dark:text-gray-400">/ 月</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                {favorite.features.map((feature) => (
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">即將上市</a>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            <div className='bg-neutral-900 px-5 py-10'>
                <div className='container mx-auto'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-md">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">編號</th>
                                    <th scope="col" className="px-6 py-3">規格</th>
                                    <th scope="col" className="px-6 py-3">價格</th>
                                    <th scope="col" className="px-6 py-3">購買</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plans.map((plan) => (
                                    <tr className="bg-white border-b dark:bg-neutral-800 dark:bg-neutral-900">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {plan.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {plan.space}
                                        </td>
                                        <td className="px-6 py-4">
                                            {plan.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href={plan.url} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">即將上市</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm mt-5 text-gray-500 mb-5">* 想在您的伺服器宣傳水滴託管，以此獲得優惠？請與客服洽談！</p>
                </div>
                <PricingCaclulator />
            </div>
            <Footer />
        </>
    );
}

export default Index
