import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [activeTab, setActiveTab] = useState('top');
  const [loading, setLoading] = useState(true); // Initially set loading to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.hnpwa.com/v0/news/1.json');
        const articlesData = response.data;
        setArticles(articlesData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []); // Run useEffect only once on component mount

  const sortArticles = () => {
    switch (activeTab) {
      case 'top':
        return [...articles].sort((a, b) => b.points - a.points);
      case 'trending':
        return [...articles].sort((a, b) => b.comments - a.comments);
      case 'fresh':
        return [...articles].sort((a, b) => new Date(b.time) - new Date(a.time));
      default:
        return [...articles].sort((a, b) => b.points - a.points);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8 text-center">Hacker News Articles</h1>
      <br />
      <div className="flex mb-4">
        <button
          onClick={() => handleTabChange('top')}
          className={`focus:outline-none ${activeTab === 'top' ? 'text-white-600 font-bold' : 'text-gray-600'} mr-100`} // Increased margin-right
        >
          Top
        </button>
        <button
          onClick={() => handleTabChange('trending')}
          className={`focus:outline-none ${activeTab === 'trending' ? 'text-white-600 font-bold' : 'text-gray-600'} mr-4`} // Consistent margin-right
        >
          Trending
        </button>
        <button
          onClick={() => handleTabChange('fresh')}
          className={`focus:outline-none ${activeTab === 'fresh' ? 'text-white-600 font-bold' : 'text-gray-600'}`}
        >
          Fresh
        </button>
      </div>
      <br />
      {loading ? (
        <div className="text-center my-8">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
          <p className="text-gray-700 mt-2">Loading...</p>
        </div>
      ) : (
        <ul className="w-full">
          {sortArticles().map((article, index) => (
            <li key={index} className="mb-4">
              <div className="p-4 bg-white shadow-md rounded">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">{article.title}</a>
                <p className="text-gray-600 text-sm mt-2">{article.points} points - {article.comments} comments - posted {article.time}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
  
  
  
};

export default Home;
