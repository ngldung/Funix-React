import { useState } from "react";

const SearchBar = (props) => {
  const [enteredSearch, setEnteredSearch] = useState("");

  const inputSearchHandler = (event) => {
    const inputLower = event.target.value;
    setEnteredSearch(inputLower.toLowerCase());
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    props.onSearchInput(enteredSearch);
    setEnteredSearch("");
  };
  return (
    <form onSubmit={searchSubmitHandler}>
      <label htmlFor="header-search">
        <span className="visually-hidden">Tìm nhân viên</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Tìm nhân viên"
        name="s"
        onChange={inputSearchHandler}
        value={enteredSearch}
      />
      <button>Tìm kiếm</button>
    </form>
  );
};

export default SearchBar;
