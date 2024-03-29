import React from 'react';
import { Link } from 'react-router-dom';
// components and styles
import './styles/index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PricingCalculator from './components/PricingCalculator';

function Index() {

    let plans = [
        {
            name: '外國伺服器',
            price: '$200',
            features: ['網路與硬體效能兼具', '多種規格可選', '免費技術諮詢'],
            link: 'foreign',
        },
        {
            name: '遊戲伺服器',
            price: '$420',
            features: ['支援 Minecraft 等多個遊戲', '網頁操控面板一鍵安裝', '免費技術諮詢'],
            link: 'unavailable',
        },
        {
            name: '台灣伺服器',
            price: '$400',
            features: ['雙倍的延遲減半的價格', '規格可客製化', '部分收益將投資太陽能綠電'],
            link: 'unavailable',
        },
        {
            name: '遠端抗攻擊',
            price: '$250',
            features: ['多種防禦線路可選', '不需繁瑣的設定', '支援內網穿透服務'],
            link: 'unavailable',
        },
    ]

    return (
        <>
            <Navbar />
            <div className='bg-neutral-900 px-5 py-10'>
                <div className='container mx-auto'>
                <h1 className='text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-green-400'>水滴託管 WD Host</h1>
                    <h1 className='text-center text-1xl text-white'></h1>

                    <div className='inline-block flex justify-center items-center'>
                        <a href='https://discord.com/invite/U69GRSSRZE' className='flex items-center justify-center relative inline-block mt-5 w-100'>
                            <button className='h-30 rounded-md bg-gradient-to-r from-sky-500 to-green-500 p-1'>
                                <div className='flex items-center justify-center bg-gray-800'>
                                    <h1 className='text-1xl font-black text-white p-3'>聯絡我們</h1>
                                </div>
                            </button>
                        </a>
                    </div>

                    <div className='grid grid-cols-1 gap-4 m-10 md:grid-cols-2 lg:grid-cols-4'>
                        {plans.map((plan) => (
                            <div className='max-w-xs p-2 sm:p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
                                <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>{plan.name}</h5>
                                <div className='flex items-baseline text-gray-900 dark:text-white'>
                                    <span className='text-3xl font-extrabold tracking-tight'>{plan.price}</span>
                                    <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/月</span>
                                </div>
                                <ul role='list' className='space-y-5 my-7'>
                                    {plan.features.map((feature) => (
                                    <li className='flex space-x-3'>
                                        <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>{feature}</span>
                                    </li>
                                    ))}
                                </ul>
                                <Link to={plan.link}>
                                    <button
                                        type='button'
                                        className={`text-white ${
                                        plan.link.includes('unavailable') ? 'bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'
                                        } focus:ring-4 focus:outline-none ${
                                        plan.link.includes('unavailable') ? 'cursor-not-allowed' : 'focus:ring-blue-200 dark:focus:ring-blue-900'
                                        } font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center`}
                                        disabled={plan.link.includes('unavailable')}
                                    >
                                        {plan.link.includes('unavailable') ? '暫售' : '選擇方案'}
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <PricingCalculator />
            </div>
            <Footer />
        </>
    );
}
      
export default Index
