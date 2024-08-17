"use client"

import { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/bot'); // Replace with your Express server URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  const getCellClass = (cellIndex) => {
    if (cellIndex % 2 === 0) {
      // Apply a specific class for even-indexed cells
      return 'backdrop-blur-lg bg-white/50'; // Change this to your desired color class
    } else {
      // Apply a different class for odd-indexed cells
      return 'bg-transparent'; // Change this to your desired color class
    }
  }

  return (
    <div className="p-4" style={{
      backgroundImage: `url('/bg/Ice Cream.png')`,
      backgroundSize: 'cover', // Optional: Adjust as needed
      backgroundPosition: 'center', 
    }}>
    <h1 className="text-2xl relative text-center font-bold mb-4 p-5  h-[600px] text-[#E91898] bg-transparent" style={{fontFamily:'PressStart2p',
    backgroundImage: `url('/Background.png')`,
    backgroundSize: 'cover', // Optional: Adjust as needed
    backgroundPosition: 'center', 
    }}> <h1 className='absolute flex items-center justify-center mt-[250px] sm:text-5xl text-xl inset-0'>Top 100 tokenholder</h1>  </h1>
    {data ? (
      <div className=" bg-background  rounded-lg border border-black shadow-sm w-full  overflow-x-auto">
        <table className=" w-full table-auto">
          <thead className="backdrop-blur-lg bg-white/50 text-xl font-bold h-[100px] border-black ">
            <tr className='bg-muted text-muted-foreground'>
              <th className='px-4 py-3 text-left font-medium text-black'>Rank</th>
              <th className='px-4 py-3 text-left font-medium text-black'>Address</th>
              <th className='px-4 py-3 text-left font-medium text-black'>Quantity(Token)</th>
            </tr>
          </thead>
          <tbody >
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={`border-b border-transparent odd:bg-muted/5 hover:bg-muted/10 transition-colors `}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`px-4 py-3 font-medium text-black `}>
                    {cell}
                    
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="text-gray-500">Loading...</div>
    )}
  </div>
  );
};

export default FetchData;
