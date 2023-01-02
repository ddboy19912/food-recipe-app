import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between p-6 items-center border-b-2 ">
      <div className="w-full">
        <h1 className="text-4xl font-semibold">
          F<span className="text-orange-500">oo</span>
          dili
        </h1>
      </div>
      <div className="flex justify-center gap-28 w-full">
        <span>
          <h2 className="text-2xl font-medium">About</h2>
        </span>
        <span>
          <h2 className="text-2xl font-medium">Recipes</h2>
        </span>
        <span>
          <h2 className="text-2xl font-medium">Contact</h2>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
