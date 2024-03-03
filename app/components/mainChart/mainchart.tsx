"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import LineChart from './linechart';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import {Button, ButtonGroup} from "@nextui-org/react";
const Mainchart = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between lg:space-x-4">
  {/* Main chart container takes 3/4 of the space */}
  <div className="bg-slate-800/50 0w-full lg:w-3/4 p-4 rounded-2xl ">
    <div className="flex justify-between border-b-1 border-slate-700">
    <h1 className="text-lg text-slate-500 border-b border-slate-600 py-4 font-semibold">Price</h1>
  <ButtonGroup className="bg-slate-800">
  <Button size="sm" className="text-slate-600 bg-green-500 hover:bg-green-500">All</Button>
<Button size="sm" className="text-slate-600 bg-slate-900 hover:bg-green-500">1 Y</Button> 
<Button size="sm" className="text-slate-600 bg-slate-900 hover:bg-green-500">6 M</Button>
<Button size="sm" className="text-slate-600 bg-slate-900 hover:bg-green-500">3 M</Button>
<Button size="sm" className="text-slate-600 bg-slate-900 hover:bg-green-500">1 M</Button>
<Button size="sm" className="text-slate-600 bg-slate-900 hover:bg-green-500">24h</Button>

    </ButtonGroup>
    </div>
  
    {/* Main chart content */}
    <LineChart />
    
  </div>
  {/* Container on the right side takes 1/4 of the space */}
  <div className="bg-slate-800/50 p-4 rounded-2xl  w-full lg:w-1/4 mt-6 lg:mt-0">
    {/* Content for the right side container */}
    <h1 className="text-lg text-slate-300 border-b border-slate-600 py-4 px-6 ">BTC Price Change</h1>
    <div className="grid grid-cols-2 gap-6">
    {/* Left column for titles */}
    <div className="text-gray-400">
      <p className="p-3 text-slate-500">All</p>
      <p className="p-3 text-slate-500">365 days</p>
      <p className="p-3 text-slate-500">90 days</p>
      <p className="p-3 text-slate-500">90 days</p>
      <p className="p-3 text-slate-500">30 days</p>
      <p className="p-3 text-slate-500">7 days</p>
      <p className="p-3 text-slate-500">24 H</p>
      {/* Add more titles as needed */}
    </div>
    
    {/* Right column for values coming from props */}
    <div className="text-white">
    
    <p className="p-3 text-green-500 text-right">505.78%</p>
    <p className="p-3 text-red-500 text-right">-43.9%</p>
    <p className="p-3 text-red-500 text-right">-16.08%</p>
    <p className="p-3 text-red-500 text-right">-16.08%</p>
    <p className="p-3 text-green-500 text-right">7.37%</p>
    <p className="p-3 text-green-500 text-right">8.42%</p>
    <p className="p-3 text-red-500 text-right">-9.99%</p>
    
    </div>
    </div>
  </div>
</div>

  );
}

export default Mainchart;
