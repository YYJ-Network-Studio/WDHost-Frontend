import React from 'react';
// components and styles
import './styles/index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PricingCaclulator from './components/PricingCalculator';

let favorites = [
    {
        name: '入門型',
        desc: '適合架設網頁伺服器、遠端防禦用途、學習伺服器操作',
        price: '$200',
        features: ['1 vCPU', '1GB RAM', '25GB SSD', '1TB 流量'],
    },
    {
        name: '進階型',
        desc: '適合小型遊戲伺服器（例如：Minecraft 約 20 人生存伺服器）',
        price: '$2700',
        features: ['6 vCPU','16GB RAM' ,'320GB SSD', '5TB 流量'],
    },
    {
        name: '專業型',
        desc: '適合中型遊戲伺服器（例如：Minecraft 2-4 分流約 20-40 人伺服器）',
        price: '$5500',
        features: ['8 vCPU', '32GB RAM', '640GB SSD', '6TB 流量'],
    }
]

let plans = [
    {
        id: 'H-1-VPS',
        space: '1 vCPU / 1GB RAM / 20GB SSD / 1TB 流量',
        price: '$200',
        url: 'https://ssl.smse.com.tw/pay/pay_b_utf.asp?Rvg2c=1&Dcvc=13396&Od_sob=H-1-VPS&Amount=200',
    },
    {
        id: 'H-2-VPS',
        space: '1 vCPU / 2GB RAM / 55GB SSD / 2TB 流量',
        price: '$400',
        url: 'https://ssl.smse.com.tw/pay/pay_b_utf.asp?Rvg2c=1&Dcvc=13396&Od_sob=H-2-VPS&Amount=400',
    },
    {
        id: 'H-3-VPS',
        space: '2 vCPU / 2GB RAM / 65GB SSD / 3TB 流量',
        price: '$550',
        url: 'https://ssl.smse.com.tw/pay/pay_b_utf.asp?Rvg2c=1&Dcvc=13396&Od_sob=H-3-VPS&Amount=550',
    },
    {
        id: 'H-4-VPS',
        space: '2 vCPU / 4GB RAM / 80GB SSD / 3TB 流量',
        price: '$700',
        url: 'https://ssl.smse.com.tw/pay/pay_b_utf.asp?Rvg2c=1&Dcvc=13396&Od_sob=H-4-VPS&Amount=700',
    },
    {
        id: 'H-5-VPS',
        space: '4 vCPU / 8GB RAM / 160GB SSD / 4TB 流量',
        price: '$1400',
        url: 'https://ssl.smse.com.tw/pay/pay_b_utf.asp?Rvg2c=1&Dcvc=13396&Od_sob=H-5-VPS&Amount=1400',
    },
    {
        id: 'H-6-VPS',
        space: '6 vCPU / 16GB RAM / 320GB SSD / 5TB 流量',
        price: '$2700',
        url: 'https://ssl.smse.com.tw/pay/pay_b_utf.asp?Rvg2c=1&Dcvc=13396&Od_sob=H-6-VPS&Amount=2700',
    },
    {
        id: 'H-7-VPS',
        space: '8 vCPU / 32GB RAM / 640GB SSD / 6TB 流量',
        price: '$5500',
        url: 'https://ssl.smse.com.tw/pay/pay_b_utf.asp?Rvg2c=1&Dcvc=13396&Od_sob=H-7-VPS&Amount=5500',
    },
    {
        id: 'H-8-VPS',
        space: '16 vCPU / 64GB RAM / 1280GB SSD / 10TB 流量',
        price: '$12000',
        url: 'https://ssl.smse.com.tw/pay/pay_b_utf.asp?Rvg2c=1&Dcvc=13396&Od_sob=H-8-VPS&Amount=12000',
    },
    {
        id: 'H-9-VPS',
        space: '24 vCPU / 96GB RAM / 1600GB SSD / 15TB 流量',
        price: '$24000',
        url: 'https://ssl.smse.com.tw/pay/pay_b_utf.asp?Rvg2c=1&Dcvc=13396&Od_sob=H-9-VPS&Amount=24000',
    },
]

function Index() {

    return (
        <>
            <Navbar />
            <section className='bg-white dark:bg-neutral-900'>
                <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                    <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
                        {/* <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'></h2> */}
                        {/* <p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'></p> */}
                    </div>
                    <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
                    {favorites.map((favorite) => (
                        <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-neutral-500 xl:p-8 dark:bg-neutral-800 dark:text-white'>
                            <h3 className='mb-4 text-2xl font-semibold'>{favorite.name}</h3>
                            <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>{favorite.desc}</p>
                            <div className='flex justify-center items-baseline my-8'>
                                <span className='mr-2 text-5xl font-extrabold'>{favorite.price}</span>
                                <span className='text-gray-500 dark:text-gray-400'>/ 月</span>
                            </div>

                            <ul role='list' className='mb-8 space-y-4 text-left'>
                                {favorite.features.map((feature) => (
                                    <li className='flex items-center space-x-3'>
                                        <svg className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'></path></svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href='#' className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900'></a>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            <div className='bg-neutral-900 px-5 py-10'>
                <div className='container mx-auto'>
                    <div className='relative overflow-x-auto shadow-md sm:rounded-md'>
                        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 dark:text-gray-400'>
                                <tr>
                                    <th scope='col' className='px-6 py-3'>編號</th>
                                    <th scope='col' className='px-6 py-3'>規格</th>
                                    <th scope='col' className='px-6 py-3'>價格</th>
                                    <th scope='col' className='px-6 py-3'>購買</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plans.map((plan) => (
                                    <tr className='bg-white border-b dark:bg-neutral-800 dark:bg-neutral-900'>
                                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                            {plan.id}
                                        </th>
                                        <td className='px-6 py-4'>
                                            {plan.space}
                                        </td>
                                        <td className='px-6 py-4'>
                                            {plan.price}
                                        </td>
                                        <td className='px-6 py-4'>
                                            <a href={plan.url} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>下單連結</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className='text-sm mt-5 text-gray-500'>* 伺服器位置：日本東京，如需其他地區請與客服洽談（最下方有聯絡資訊，可透過 Email, Discord, Facebook, Instagram 聯繫）！</p>
                    <p className='text-sm text-gray-500 mb-5'>* 如需購買 NVMe SSD 或是 3GHz+ 頻率的伺服器請與客服洽談（最下方有聯絡資訊，可透過 Email, Discord, Facebook, Instagram 聯繫）！</p>
                </div>
                <PricingCaclulator />
            </div>
            <Footer />
        </>
    );
}

export default Index
