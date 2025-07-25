type QuoteListProps = {
  quoteList: string[];
};

export function QuotesList({ quoteList }: QuoteListProps) {
  if (quoteList.length === 0) return <p>No quotes were found!</p>;

  const quoteListItem = quoteList.map((quote, index) => (
    <li key={quote.slice(5) + index}>{quote}</li>
  ));

  return <ul>{quoteListItem}</ul>;
}
