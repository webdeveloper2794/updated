
"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {Input, Button } from "@nextui-org/react";
import { MagnifyingGlassIcon, SunIcon, MoonIcon,Cog8ToothIcon } from "@heroicons/react/24/outline"; 
interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}
const columns = [
  {name: "Market", uid: "market"},
  {name: "Price", uid: "price"},
  {name: "24H Change", uid: "change"},
  {name: "24H Lowest", uid: "low"},
  {name: "24H Highest", uid: "high"},
  {name: "24H Volume", uid: "volume"},
  {name: "24H Value", uid: "value"},
];

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};


function getColorClass(changePercent24Hr:any) {
  const changePercent = parseFloat(changePercent24Hr);
  if (changePercent < 0) {
    return 'text-red-500';
  } else if (changePercent > 0) {
    return 'text-green-500';
  } else {
    return 'text-gray-500';
  }
}

function formatPercentage(changePercent24Hr:any) {
  const changePercent = parseFloat(changePercent24Hr);
  if (!isNaN(changePercent)) {
    // Round to two decimal places
    const roundedPercent = Math.round(changePercent * 100) / 100;
    // Display only three digits and add '%' sign
    return roundedPercent.toFixed(2) + '%';
  }
  return changePercent24Hr;
}
function formatPrice(priceUsd:any) {
  const price = parseFloat(priceUsd);
  if (!isNaN(price)) {
    // Round to two decimal places
    return price.toFixed(2);
  }
  return priceUsd;
}
function formatVolume(volumeUsd24Hr:any) {
  const volume = parseFloat(volumeUsd24Hr);
  if (!isNaN(volume)) {
    if (volume < 1000) {
      return volume.toFixed(2);
    } else if (volume < 1000000) {
      return (volume / 1000).toFixed(2) + 'K';
    } else if (volume < 1000000000) {
      return (volume / 1000000).toFixed(2) + 'M';
    } else {
      return (volume / 1000000000).toFixed(2) + 'B';
    }
  }
  return volumeUsd24Hr;
}

const Table = () => {
  const router = useRouter();
  const [data, setData] = useState<Asset[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.coincap.io/v2/assets');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await res.json();
        setData(responseData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 

  }, []);

  return (
    <div className="w-full rounded-xl bg-slate-800/50 mt-6 overflow-hidden p-6">
      <div className="flex justify-between  pb-4 border-b-1 border-slate-700">
        <div className="flex items-center">
          <span className="text-slate-400 font-semibold text-lg">Market</span>
        </div>
        <div className="flex items-center">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[20rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-transparent dark:bg-transparent rounded-full ring-1 ring-slate-700 focus:ring-0 focus:bg-transparent border-none",
          }}
          variant="bordered"
            placeholder="Search..."
            size="md"
            endContent={<MagnifyingGlassIcon  className="w-6 h-6" />}
            type="search"
          />
        </div>
      </div>
      <table className="w-full text-left pl-8">
        <thead>
          <tr className="border-b border-slate-700">
            {columns.map((column:any) => (
              <th key={column.uid} className="py-4 text-slate-500 font-semibold text-sm" >{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data  && data.slice(0, 3).map((user:any, index:any) => (
            <tr key={user.id} className={index !== data.length - 1 ? 'border-b border-slate-700' : ''}>
              <td className="py-2">                
                <User   
      name={`${user.name} (${user.symbol})`}
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
                </td>
                <td>{formatPrice(user.priceUsd)}</td>
              <td className={getColorClass(user.changePercent24Hr)}>
          {formatPercentage(user.changePercent24Hr)}
        </td>
        <td>{formatPrice(user.vwap24Hr)}</td>
        <td>{formatPrice(user.vwap24Hr)}</td>
        <td>{formatVolume(user.volumeUsd24Hr)}</td>
        <td>{formatVolume(user.volumeUsd24Hr)}</td>
        <td> <Image
              src="https://www.coingecko.com/coins/28453/sparkline.svg"
              alt="Picture of the author"
              width={100}
              height={100}
            /></td>
              
              {/* Add more cells for other user properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 export default Table;