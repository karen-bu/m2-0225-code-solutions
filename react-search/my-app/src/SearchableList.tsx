import { QuotesList } from './QuotesList';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

type SearchableListProps = {
  quoteList: string[];
};

export function SearchableList({ quoteList }: SearchableListProps) {
  const [searchValue, setSearchValue] = useState('');

  const displayedQuotes = quoteList.filter((quote) =>
    quote.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="search-header">
        <SearchBar inputValue={searchValue} setInputValue={setSearchValue} />
      </div>
      <div>
        <QuotesList quoteList={displayedQuotes} />
      </div>
    </div>
  );
}
