import React from 'react'
import Image from "next/image"

const cardsData = [
  {
    title: 'Coins',
    volume: '9.43M',
    hour: '24H Value (USD)',
    scr: 'https://www.coingecko.com/coins/825/sparkline.svg'
  },
  {
    title: '24H Price Change',
    volume: '683',
    hour: '+1.12%',
    state: "plus",
    scr: 'https://www.coingecko.com/coins/825/sparkline.svg'
  },
  {
    title: 'Total Market Cap(USD)',
    volume: '1211.58B',
    hour: '-1.12%',
    state:"minus",
    scr: 'https://www.coingecko.com/coins/825/sparkline.svg'
  },
  {
    title: '24H Value (USD)',
    volume: '28.57M',
    hour: 'Listed Cryptos',
    scr: 'https://www.coingecko.com/coins/825/sparkline.svg'
  }
];
const Cards = () => {
  const extractNumber = (str:any) => {
    // Remove non-numeric characters and convert to float
    return parseFloat(str.replace(/[^\d.-]/g, ''));
  };
  
  const isPositive = (str:any) => {
    // Check if the extracted number is positive
    return extractNumber(str) >= 0;
  };
  return (
    <div className='w-full flex justify-between flex-wrap'>
      {cardsData.map((data, index) => (
        <section key={index} className='bg-slate-800/50 shadow-md p-4 mb-4 w-full lg:w-[18.5rem] flex flex-col rounded-xl'>
          <h2 className='text-lg  text-slate-500 font-semibold mb-2 border-b-1 border-slate-600 pb-4'>{data.title}</h2>
          <div className='flex justify-between'>
            <div>
              <p className='text-gray-200 font-semibold p-2 text-lg'>{data.volume}</p>
              <p className={`text-md ${data.state === 'plus' ? 'text-green-500' : (data.state === 'minus' ? 'text-red-500' : 'text-slate-500')}`}>{data.hour}</p>
            </div>
            <div className="relative">
            <Image
              src="https://www.coingecko.com/coins/825/sparkline.svg"
              alt="Picture of the author"
              layout='responsive'
              width={100}
              height={100}
            />
            </div>
           
          </div>
        </section>
      ))}


    </div>
  )
}

export default Cards
