import  { useState } from 'react';
import axios from 'axios';

const GenerateAI = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleFetchImages = async (resetPage = false) => {
    if (!query) return;

    setLoading(true);
    try {
      const response = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: { query, per_page: 10, page },
          headers: {
            Authorization: `Client-ID dcNQAeTT2vw_B8qwWvWBlqYddjxUozoXu1mWldSU3V4`,
          },
        }
      );

      const resultUrls = response.data.results.map((result) => result.urls.regular);
      setImages(resetPage ? resultUrls : [...images, ...resultUrls]);
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Failed to fetch images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    handleFetchImages(true);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    handleFetchImages();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">Find Your Inspiration</h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            className="w-full max-w-lg border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Search for images..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className={`ml-3 px-6 py-3 rounded-lg text-white font-semibold shadow ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg--700'
            }`}
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((imageUrl, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                src={imageUrl}
                alt={`Unsplash Image ${index + 1}`}
                className="w-full rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              />
            </div>
          ))}
        </div>
        {images.length > 0 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 rounded-lg text-white font-semibold bg-red-600 hover:bg-red-700 shadow-md"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateAI;
