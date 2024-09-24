import React from 'react';

const Crud = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <header className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <nav className="navbar flex">
            <div className="navdiv flex justify-between">
              <div className="logo">
                {/* Uncomment and properly import image if needed */}
                {/* <img src={require('./src/assets/crud.jpg')} alt="" style={{height: '80px', width: '200px'}} className="bg-blue-400" /> */}
                <h1 className="font-awesome font-serif text-3xl mt-8 mb-6 ml-6">Record</h1>
              </div>
              <ul className="flex gap-14 justify-between mt-10 ml-60 mb-6 items-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Contactus</a></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-6 py-9 w-full">Read Records</h1>

        <div className="flex mb-4">
          <input type="text" placeholder="Type a name..." className="border border-gray-300 px-4 py-2" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex justify-end mb-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
            <i className="fa-solid fa-trash"></i> Delete Selected
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mx-2">
            <i className="fa-solid fa-download"></i> Export CSV
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md">
            <i className="fa-solid fa-plus"></i> Create Record
          </button>
        </div>

        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border border-gray-300">
                <input type="checkbox" className="m-1" />
              </th>
              <th className="px-4 py-2 text-left border border-gray-300">Name</th>
              <th className="px-4 py-2 text-left border border-gray-300">Description</th>
              <th className="px-4 py-2 text-left border border-gray-300">Price</th>
              <th className="px-4 py-2 text-left border border-gray-300">Category</th>
              <th className="px-4 py-2 text-left border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left border border-gray-300">
                <input type="checkbox" className="m-1" />
              </td>
              <td className="px-4 py-2 text-left border border-gray-300">Pillow</td>
              <td className="px-4 py-2 text-left border border-gray-300">Sleeping well is important.</td>
              <td className="px-4 py-2 text-left border border-gray-300">$8.99</td>
              <td className="px-4 py-2 text-left border border-gray-300">Personal</td>
              <td className="px-4 py-2 text-left border border-gray-300">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2">
                  <i className="fa-solid fa-pen-to-square"></i> Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md">
                  <i className="fa-solid fa-delete-left"></i> Delete
                </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        <div className="flex mt-4">
          <div className="pagination">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold ml-0 py-2 px-4">1</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 ml-0 px-4">2</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r ml-0">&gt;&gt;</button>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <input type="text" placeholder="Type page number..." className="border border-gray-300 px-4 py-2" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">Go</button>
        </div>
      </div>
    </div>
  );
}

export default Crud;
