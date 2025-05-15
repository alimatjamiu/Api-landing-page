"use client";
import { useState } from 'react';


export default function Home() {
  const [inputUrl, setInputUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
 const url = "https://tinyurl.com/api-create.php?url="
  const handleShorten = async () => {
   
    try {
      const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputUrl)}`);
      const data = await res.text();
      setShortUrl(data);
    } catch (error) {
      alert('Error shortening URL');
    }

    
    
  };
  console.log(url);
  


  return (
    <div className="bg-[#bfbfbf]  flex items-center justify-center">
      <div className="flex flex-col items-center container mx-auto px-4 -mt-10">
        <div className="shorten rounded-lg px-8 py-6 shadow-md bg-white lg:w-[70%]">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Shorten a link here..."
              className="w-full py-3 px-4 rounded-md text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              onClick={handleShorten}
              className="bg-teal-500 text-white px-4 py-3 rounded-md hover:bg-teal-600 transition"
            >
              Shorten
            </button>
          </div>
          {shortUrl && (
            <div className="mt-4 text-center">
              <p className="text-gray-700">Shortened URL:</p>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {shortUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

