import './SearchBar.module.css';

function SearchBar({ setSearchAstronaut }) {
  const handleChange = event => {
    const input = event.target.value;
    setSearchAstronaut(input);
  };

  return (
    <input
      placeholder="Rechercher un/une astronaute"
      type="text"
      id="search"
      name="search"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
