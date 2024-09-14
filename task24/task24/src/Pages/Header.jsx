// import React from 'react'
// import { Link } from 'react-router-dom'

// function Header() {
//   return (
//     <>
//     <div className="bg-blue-300 text-white p-3 shadow-md">
//         <div className="mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-10">
//             <img src="https://cdn.vectorstock.com/i/500p/43/67/dear-head-emblem-vintage-in-triangle-logo-design-vector-28764367.jpg" alt="Logo" className="h-10" />
//             <a href="/" className="mr-4"><b>Home</b></a>
//             <a href="/" className="mr-4"><b>Categories</b></a>
//             <a href="/" className="mr-4"><b>About Us</b></a>
//           </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Header

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-blue-300 text-white p-3 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center gap-10">
          <img
            src="https://cdn.vectorstock.com/i/500p/43/67/dear-head-emblem-vintage-in-triangle-logo-design-vector-28764367.jpg"
            alt="Logo"
            className="h-10"
          />
          <Link to="/" className="mr-4"><b>Home</b></Link>
          <Link to="/" className="mr-4"><b>Categories</b></Link>
          <Link to="/" className="mr-4"><b>About Us</b></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
