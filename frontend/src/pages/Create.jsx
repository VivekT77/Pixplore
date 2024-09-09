import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import NotificationProfile from '../components/NotificationProfile';
import CategoryDropdown from '../components/CategoryDropdown';

const Create = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a form data object
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('link', link);
    formData.append('image', image);

    // Log the form data (or send it to the server)
    console.log({
      title,
      description,
      link,
      image,
    });

    // Reset form fields
    setTitle('');
    setDescription('');
    setLink('');
    setImage(null);
    setImagePreview(null);

    alert('Pin created successfully!');
  };

  return (
    <>
    <div className=' flex justify-items-center p-4 bg-white shadow-md sticky top-0 z-50'>
      <div>
      <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
            alt="Pinterest"
            className="h-11"
          />
      </div>
        <div className=" ml-10 flex items-center font-medium space-x-7">
          <Link to="/today" className="hover:text-rose-700">
            Home
          </Link>
          <Link to="/watch" className="hover:text-rose-700">
          Explore
          </Link>
          <Link to="/explore" className=" text-white bg-black px-4 py-2 rounded-2xl hover:ring-4">
            Create
          </Link>
        </div>
        <div className='ml-20'>
          < input
              type="text"
              placeholder="Search"
              className=" ml-4 px-4 py-2 border-2 rounded-lg focus:outline-none"
            />
        </div> 
        <div className=" flex ml-80">
            <NotificationProfile/>
        </div>
      </div>
      <div className='pt-4 font-semibold text-2xl hover:text-red-500 fixed left-1/3 ml-36  '>
          Create Pin
        </div>
        <div>


        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6 ">
      <form className="bg-white rounded-lg shadow-lg w-full max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          {/* Left side: Image Upload Section */}
          <div className="md:w-1/2 flex justify-center items-center p-4">
            <label
              htmlFor="file-upload"
              className="border-dashed border-2 border-gray-300 rounded-lg w-full h-64 flex justify-center items-center cursor-pointer"
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="text-center">
                  <div className="mb-4">
                    <div className="bg-gray-200 rounded-full p-4">
                      <svg
                        className="h-8 w-8 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600">Click to upload</p>
                  <p className="text-gray-400 text-sm">or drag and drop</p>
                  <p className="text-gray-400 text-sm">JPG, PNG, less than 20MB</p>
                </div>
              )}
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>

          {/* Right side: Pin Details Section */}
          <div className="md:w-1/2 p-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Add a title"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Tell everyone what your Pin is about"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <input
                type="url"
                placeholder="Add a link"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <CategoryDropdown/>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 mt-5 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>


        </div>
      </>
  )
}
export default Create;