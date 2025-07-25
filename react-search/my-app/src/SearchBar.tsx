import './SearchBar.css';
import searchIcon from './assets/search-solid.svg';

type SearchBarProps = {
  setInputValue(searchInput: string): void;
  inputValue: string;
};

export function SearchBar({ inputValue, setInputValue }: SearchBarProps) {
  console.log(inputValue);
  return (
    <div>
      <input
        id="search-bar"
        type="text"
        name="search-bar"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}></input>
      <img src={searchIcon}></img>
    </div>
  );
}
