import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative flex">
      <input
        type="text"
        placeholder="Cerca..."
        className="w-full h-10 pl-4 pr-9 bg-background border-primary/50 focus:border-accent border-2 rounded-full overflow-hidden"
      />
      <button className="absolute right-4 top-2 transform text-primary/50">
        <Search size={20} color="currentColor" className="cursor-pointer" />
      </button>
    </div>
  );
};

export default SearchBar;