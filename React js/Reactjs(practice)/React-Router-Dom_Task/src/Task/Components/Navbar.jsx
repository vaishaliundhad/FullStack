import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>

      <div>

        <div className='flex items-center justify-around bg-gray-400 p-6 text-white'>

          <div>
            <nav>
              <ul className="flex gap-6">
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/about">AboutUs</Link> </li>
                <li><Link to="/help">Help</Link></li>
                <li> <Link to="/loader">Loader</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <Outlet />
      </div>

    </>
  );
};

export default Navbar;



