const searchSubmitHandler = (event) => {
  event.preventDefault();
};

const SearchBar = () => (
  <form onSubmit={searchSubmitHandler}>
    <label htmlFor="header-search">
      <span className="visually-hidden">Tìm nhân viên</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Tìm nhân viên"
      name="s"
    />
    <button type="submit">Tìm kiếm</button>
  </form>
);

export default SearchBar;
