'use client';
import { useState, useEffect } from 'react';

export default function LinkShortener() {
  const [url, setUrl] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  
  useEffect(() => {
    if (copiedIndex !== null) {
      const timer = setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedIndex]);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const shortenUrl = async () => {
    setError('');
    
    if (!url.trim()) {
      setError('Please add a link');
      return;
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    setIsLoading(true);
    
    try {
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Generate a random short code similar to those in the mockups
      const shortCodes = ['k4lKyk', 'gxOXp9', 'gob3X9'];
      const randomShortCode = shortCodes[Math.floor(Math.random() * shortCodes.length)];
      
      const newLink = {
        original: url,
       shortened: `https://api.tinyurl.com/create${randomShortCode}`,

        timestamp: new Date().getTime()
      };
      
      setShortenedLinks(prev => [newLink, ...prev]);
      setUrl('');
    } catch (err) {
      setError('Failed to shorten link. Please try again.');
      console.error('Error shortening URL:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      shortenUrl();
    }
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedIndex(index);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
  <div className='bg-[#bfbfbf]'>
      <div className="  flex flex-col items-center container mx-auto   ">
      {/* URL Input Section - Matches the dark purple background in mockups */}
      <div className="shorten   rounded-lg px-8 py-4 mb-6 shadow-md lg:w-[70%] -mt-10 lg:py-4">
        <div className="relative">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyUp={handleKeyPress}
                className={`w-full py-3 px-4 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  error ? 'border-2 border-red-500' : ''
                }`}
              />
              {error && (
                <p className="text-red-500 text-sm absolute -bottom- left-2">
                  {error}
                </p>
              )}
            </div>
            <button
              onClick={shortenUrl}
              disabled={isLoading}
              className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-75 shadow-md"
            >
              {isLoading ? 'Shortening...' : 'Shorten It!'}
            </button>
          </div>
        </div>
      </div>

      {/* Shortened Links Section - Matches the style in mockups */}
      {shortenedLinks.length > 0 && (
        <div className="w-full space-y-4">
          {shortenedLinks.map((link, index) => (
            <div key={index} className="bg-white rounded-md shadow-md overflow-hidden w-[68%] lg:w-[70%] mx-auto flex flex-col lg:flex-row lg:justify-between justify-center items-center">
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between border-b sm:border-b-0">
                <p className="text-gray-700 truncate max-w-full sm:max-w-md font-medium">{link.original}</p>
              </div>
                <p className="text-teal-500 font-medium">{link.shortened}</p>
                <button
                  onClick={() => copyToClipboard(link.shortened, index)}
                  className={`${
                    copiedIndex === index ? 'bg-indigo-900' : 'bg-teal-400 hover:bg-teal-500'
                  } text-white font-bold py-2 px-6 lg:mx-6 rounded-md transition-colors duration-200 w-full  lg:min-w-20 text-center`}
                >
                  {copiedIndex === index ? 'Copied!' : 'Copy'}
                </button>
              </div>
            
          ))}
        </div>
      )}
    </div>
  </div>
  );}


