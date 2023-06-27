import React from 'react';
import { useState } from 'react';
// components and styles
import '../styles/index.css';

function PricingCalculator() {
    // Initial value
    const [hostType, setHostType] = useState("game-vps");
    const [cpuCores, setCpuCores] = useState(2);
    const [ramGB, setRamGB] = useState(4);
    const [storageType, setStorageType] = useState("hdd");
    const [storageGB, setStorageGB] = useState(20);
    const [networkTB, setNetworkTB] = useState(2);

    const handleHostTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setHostType(event.target.value);

        if (event.target.value === "game-ds") {
            setCpuCores(4);
            setRamGB(8);
            setStorageGB(120);
        } else {
            setStorageGB(2);
            setRamGB(4);
            setStorageGB(20);
        }
    };

    const calculateTotalPrice = () => {
        // Unit price
        let cpuPrice = cpuCores * 10;
        let ramPrice = ramGB * 50;
        let storagePrice = storageType === "hdd" ? storageGB * 0.5 : storageGB * 1;
        let networkPrice = networkTB * 80;

        if (hostType === "game-ds") {
            cpuPrice += 20;
            ramPrice += 30;
        }

        return cpuPrice + ramPrice + storagePrice + networkPrice; // Calculate the total amount
    };

  
    const handleCpuSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCpuCores(Number(event.target.value));
    };
  
    const handleRamSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRamGB(Number(event.target.value));
    };
  
    const handleStorageSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStorageGB(Number(event.target.value));
    };
  
    const handleStorageTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStorageType(event.target.value);
    };
  
    const handleNetworkSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNetworkTB(Number(event.target.value));
    };
  
    return (
        <div className="container mx-auto max-w-3xl text-white">
            <h2 className="text-xl font-bold mb-4">客製化伺服器規格</h2>
            
            <label>主機類型</label>
            <select value={hostType} onChange={handleHostTypeChange} className="w-full p-1 mt-2 mb-2 bg-neutral-700 border-gray-300 rounded">
                <option value="game-vps">遊戲虛擬伺服器</option>
                <option value="game-ds">遊戲實體伺服器</option>
                <option value="web">網頁伺服器（即將上市）</option>
                <option value="vps">虛擬伺服器（暫不販售）</option>
                <option value="ds">實體伺服器（暫不販售）</option>
            </select>

            <div className="mb-4">
                <label className="text-sm">CPU (Core)</label>
                <input
                    type="range"
                    min={2}
                    max={8}
                    value={cpuCores}
                    onChange={handleCpuSliderChange}
                    className="w-full"
                />
                <div className="text-xs text-gray-500">{cpuCores} Core</div>
            </div>
  
            <div className="mb-4">
                <label className="text-sm">RAM (GB)</label>
                <input
                    type="range"
                    min={4}
                    max={32}
                    value={ramGB}
                    onChange={handleRamSliderChange}
                    className="w-full"
                />
                <div className="text-xs text-gray-500">{ramGB} GB</div>
            </div>
  
            <div className="mb-4">
                <label className="text-sm">Storage (GB)</label>
                <select
                    value={storageType}
                    onChange={handleStorageTypeChange}
                    className="mt-2 ml-2 p-1 bg-neutral-700 border-gray-300 rounded"
                >
                    <option value="hdd">HDD（上限 500GB）</option>
                    <option value="ssd">NVMe SSD（上限 900GB）</option>
                </select>
                <input
                    type="range"
                    min={20}
                    max={1000}
                    value={storageGB}
                    onChange={handleStorageSliderChange}
                    className="w-full"
                />
                <div className="text-xs text-gray-500">{storageGB} GB</div>
            </div>
  
            <div className="mb-4">
                <label className="text-sm">網路流量 (TB)</label>
                <input
                    type="range"
                    min={2}
                    max={10}
                    step={2}
                    value={networkTB}
                    onChange={handleNetworkSliderChange}
                    className="w-full"
                />
                <div className="text-xs text-gray-500">{networkTB} TB</div>
            </div>
  
            <div className="mt-8">
                <h1 className="text-lg font-bold">總金額：${calculateTotalPrice()} / <span className="text-sm text-gray-300">1 個月</span></h1>
                <p className="text-md text-gray-400">配置：{cpuCores} Core, {ramGB} GB RAM, {storageGB} GB {storageType.toUpperCase()}, {networkTB} TB 網路流量</p>
                <p className="text-sm text-gray-500">* 網路使用日本線路，如需更改線路或是增強 DDoS 防禦，請聯繫客服！</p>
                <p className="text-sm text-gray-500">* 客製化實體伺服器的規格和售價僅供參考。</p>
            </div>
      </div>
    );
};

export default PricingCalculator;