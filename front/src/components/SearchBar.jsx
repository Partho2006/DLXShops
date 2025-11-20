import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location.pathname, showSearch]);

  return showSearch && visible ? (
    <div className="border-t bg-gray-100 py-3 flex items-center justify-center gap-4">

      <div className="flex items-center border border-gray-400 px-5 py-2 rounded-2xl w-[70%] max-w-[500px] bg-white">
        <input
          type="text"
          className="flex-1 outline-none bg-transparent text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <img src={assets.search_icon} alt="" className="w-4" />
      </div>

      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt=""
        className="w-4 cursor-pointer hover:scale-110 transition"
      />
    </div>
  ) : null;
}

export default SearchBar;

