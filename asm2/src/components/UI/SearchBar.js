import { useRef } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const searchRef = useRef();
  const searchSubmitHandler = (event) => {
    event.preventDefault();
    const enteredSearch = searchRef.current.value;
    const inputName = enteredSearch.slice(enteredSearch.lastIndexOf(' ') + 1);
    props.onSearchInput(inputName.toLowerCase());
    searchRef.current.value = "";
  };
  return (
    <form onSubmit={searchSubmitHandler} className={classes.form}>

      <input
        type="text"
        id="header-search"
        placeholder="Tìm nhân viên"
        name="s"
        ref={searchRef}
      />
      <button>Tìm kiếm</button>
    </form>
  );
};

export default SearchBar;
