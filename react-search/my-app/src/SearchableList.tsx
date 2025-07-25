import { QuotesList } from './QuotesList';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

type SearchableListProps = {
  quoteList: string[];
};

export function SearchableList({ quoteList }: SearchableListProps) {
  const [searchValue, setSearchValue] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState(quoteList);

  function filterQuotes({ quoteList }: SearchableListProps) {
    const filter = quoteList.filter((searchValue) =>
      quoteList.includes(searchValue.toLowerCase())
    );
    setFilteredQuotes(filter);
  }

  return (
    <div>
      <div className="search-header">
        <SearchBar inputValue={searchValue} setInputValue={setSearchValue} />
      </div>
      <div>
        <QuotesList
          quoteList={filteredQuotes}
          onChange={filterQuotes({ quoteList })}
        />
      </div>
    </div>
  );
}
