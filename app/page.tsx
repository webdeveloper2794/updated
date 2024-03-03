
import React from "react";
import Image from "next/image";
import Cards from "./components/cards/cards";
import Mainchart from "./components/mainChart/mainchart";
import Table from "./components/table/table";
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
async function getTableData(){
  const response = await fetch("https://api.coincap.io/v2/assets");
  const data = await response.json();
  return data
}
export default async  function Home() {
  const datas = await getTableData();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('https://api.coincap.io/v2/assets');
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const responseData = await res.json();
  //       setData(responseData.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData(); 

  // }, []);

 
 
  return (
    <main className="flex flex-col flex-1 bg-black p-6" style={{background: "url('/bg.png')", backgroundAttachment:"fixed", backgroundSize:"cover"}}>
      <Cards />
      <Mainchart/>
      <Table  />
    </main>    
  );
}

