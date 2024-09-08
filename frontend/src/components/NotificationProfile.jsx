import React from 'react';

const NotificationProfile = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Notification Icon with Badge */}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-6 w-6 text-gray-600"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C10.07 2 8.5 3.57 8.5 5.5v.75C7.61 6.72 7 7.77 7 9v6l-1 1v1h12v-1l-1-1V9c0-1.23-.61-2.28-1.5-2.75v-.75C15.5 3.57 13.93 2 12 2zM12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2z" />
        </svg>
        <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold text-white bg-red-600 rounded-full">
          🔔
        </span>
      </div>

      {/* Chat Icon */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-6 w-6 text-gray-600"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.49 2 2 5.92 2 10.5c0 2.66 1.72 5.04 4.44 6.6l-1.05 4.68L9.25 18.8c.89.16 1.82.2 2.75.2 5.51 0 10-3.92 10-8.5S17.51 2 12 2zM7 10h10v2H7v-2zm6 4H7v-2h6v2zm4-4h-4v-2h4v2z" />
        </svg>
      </div>

      {/* Profile Circle with Initial and Dropdown Icon */}
      <div className="flex items-center space-x-1">
        <div className="h-8 w-8 bg-black-500 rounded-full flex items-center justify-center text-black text-sm">
          V
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-4 w-4 text-black-600"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
    </div>
  );
};

export default NotificationProfile;
