import css from "./SearchBox.module.css";

const SearchBar = ({ onChange, value }) => {
  return (
    <>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="to find..."
        className={css.input}
      />
    </>
  );
};

export default SearchBar;
