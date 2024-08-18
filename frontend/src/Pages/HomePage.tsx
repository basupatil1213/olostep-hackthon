import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container w-screen mx-auto p-8 bg-white rounded-lg shadow-lg max-w-4xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Welcome to the Web Scraping Tool</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Our web scraping tool allows you to extract data from any website and save it to our database. You can also interact with ChatGPT to get answers related to your scraping tasks.
      </p>
      
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Enter a URL to scrape data from the web.</li>
          <li>Save the scraped data to our database for future use.</li>
          <li>Chat with ChatGPT to get insights and answers related to your scraping tasks.</li>
        </ul>
      </div>
      
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get Started</h2>
        <p className="text-lg text-gray-700 mb-4">
          To start scraping, navigate to the <Link to="/scrap" className="text-blue-600 hover:text-blue-800 font-medium">Input Page</Link> where you can enter the URL you want to scrape.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          After scraping, you can view and manage your data on the <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 font-medium">Data Page</Link>.
        </p>
        <p className="text-lg text-gray-700">
          If you have any questions or need assistance, visit the <Link to="/chat" className="text-blue-600 hover:text-blue-800 font-medium">Chat Page</Link> to interact with ChatGPT.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
