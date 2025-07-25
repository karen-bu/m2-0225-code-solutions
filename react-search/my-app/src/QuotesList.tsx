type QuoteListProps = {
  quoteList: string[];
  handleChange(array: string[]): void;
};

export function QuotesList({ quoteList, handleChange }: QuoteListProps) {
  const quoteListItem = quoteList.map((quote, index) => (
    <li key={index}>{quote}</li>
  ));

  return <ul onChange={handleChange}>{quoteListItem}</ul>;
}
