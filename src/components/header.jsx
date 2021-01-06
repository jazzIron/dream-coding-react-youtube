import React, { useRef } from "react";

const Header = ({ onSearch }) => {
  const searchRef = useRef(null);
  const handleSearch = () => {
    const searchKeyword = searchRef.current.value;
    console.log(searchKeyword);
    searchKeyword && onSearch(searchKeyword);
  };

  const onSubmit = async () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header>
      <div>
        <img src="./images/logo.png" alt="header-logo-icon" />
        <span>YouTube</span>
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search...."
        ref={searchRef}
        onKeyPress={onKeyPress}
      />
      <button className="">
        <img
          src="./images/search.png"
          alt="header-icon-search"
          onClick={onSubmit}
        />
      </button>
    </header>
  );
};

export default Header;
