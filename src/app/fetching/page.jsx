"use client"
import React, { useState, useEffect } from 'react';
import cheerio from 'cheerio';

const TokenBalances = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://taikoscan.io/token/0xA9d23408b9bA935c230493c40C73824Df71A0975#balances';
        
        // Fetch the HTML from the URL
        const response = await fetch(url);
        const html = await response.text();

        // Load the HTML into Cheerio
        const $ = cheerio.load(html);

        const scrapedData = [];

        // Select each row and extract the rank, address, and quantity
        $('table tbody tr').each((index, element) => {
          const rank = $(element).find('td:nth-child(1)').text().trim();
          const address = $(element).find('td:nth-child(2) a').text().trim();
          const quantity = $(element).find('td:nth-child(3)').text().trim();

          scrapedData.push({ rank, address, quantity });
        });

        // Set the data state with the scraped data
        setData(scrapedData);
      } catch (error) {
        console.error('Error fetching the page:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Token Balances</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Address</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.rank}</td>
              <td>{row.address}</td>
              <td>{row.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenBalances;
