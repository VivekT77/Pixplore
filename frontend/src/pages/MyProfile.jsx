import React from 'react'

const MyProfile = () => {
  return (
    <>
      <div>
      <div className="flex flex-col items-center justify-center">
        <div className="p-6 w-full">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-3xl text-gray-700">
                username
              </span>
            </div>
          </div>

          <h1 className="text-center text-2xl font-bold mt-4">name</h1>
          <p className="text-center text-gray-600 mt-2">email</p>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyProfile
