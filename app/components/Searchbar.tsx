"use client"

import { FormEvent, useState } from "react";

const Searchbar = () => {
  const [searchPrompt, setSeardhPrompt]  = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form className="flex flex-wrap gap-4 mt-12"
      onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSeardhPrompt(e.target.value)}
          placeholder="Enter product link"
          className="searchbar-input"
        />
        
        <button type="submit" className="searchbar-btn">
            Search 
        </button>
    </form>
  )
}

export default Searchbar;
