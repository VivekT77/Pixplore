

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-red-500">Pixplore </h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pixplore . All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-red-500">About Us</a>
          <a href="#" className="text-white hover:text-red-500">Privacy Policy</a>
          <a href="#" className="text-white hover:text-red-500">Terms of Service</a>
          <a href="#" className="text-white hover:text-red-500">Contact</a>
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-red-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.5 5.6c-1.6 1-3.3 1.7-5.1 2 .01.2.01.5.01.7 0 7.2-5.5 15.4-15.4 15.4-3 0-5.7-.8-8-2.3.4 0 .7.01 1 .01 2.5 0 4.9-.8 6.8-2.2-2.4-.05-4.4-1.6-5.1-3.7.3.05.6.1.9.1.4 0 .7-.05 1-.1-2.5-.5-4.4-2.6-4.4-5.2v-.1c.8.4 1.7.7 2.6.7-1.6-1.1-2.6-2.9-2.6-5.1 0-1.1.3-2.1.8-3 2.9 3.6 7.2 5.9 12 6.2-.1-.4-.1-.9-.1-1.4 0-3.2 2.6-5.8 5.8-5.8 1.7 0 3.3.7 4.4 1.9 1.4-.3 2.7-.8 3.8-1.5-.5 1.4-1.4 2.7-2.7 3.4 1.2-.1 2.4-.5 3.4-1.1-.8 1.3-1.8 2.5-3 3.5z" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-red-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.3 2.8 8 6.7 9.4.5.1.6-.2.6-.5v-1.8c-2.7.6-3.3-1.3-3.3-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 2 .5 2.3 1 .1-.8.4-1.5.8-1.9-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 .9-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.5-.3.8 0 1.7.1 2.5.3 1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7.9 1.6.9 2.7 0 3.9-2.4 4.7-4.7 5 .5.4.9 1.2.9 2.5v3.7c0 .3.2.6.6.5 3.9-1.4 6.7-5 6.7-9.4 0-5.4-4.4-9.8-9.8-9.8z" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-red-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-8 19h-3v-8h3v8zm-1.5-9.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6zm11.5 9.2h-3v-4c0-.9-.1-2-1.2-2-1.2 0-1.4.9-1.4 1.9v4.1h-3v-8h2.8v1.1h.1c.4-.8 1.3-1.7 2.7-1.7 2.9 0 3.5 1.9 3.5 4.3v4.3z" />
          </svg>
        </a>
       
      </div>
    </footer>
  );
};

export default Footer;
