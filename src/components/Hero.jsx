import React from 'react';
import heroImg from '../assets/heroImg.jpg';
import SearchBar from './SearchBar';

const Hero = ({ handleSubmit, query, setQuery }) => {
  return (
    <div className="relative">
      <img src={heroImg} alt="" className="h-[35rem] w-full object-cover" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl bg-red-300 text-white p-10 text-center rounded-full shadow-lg hover:bg-blue-200">
        Welcome to Foodili <br /> Stores
      </h1>
      <SearchBar
        handleSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
      />
    </div>
  );
};

export default Hero;
