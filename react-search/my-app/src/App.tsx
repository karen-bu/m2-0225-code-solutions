import './App.css';

import { SearchableList } from './SearchableList';

const quotes = [
  "Don't f**k with me! I have the power of God and anime on my side.",
  'The good deeds you have done before defend you.',
  'Sometimes, the only way out is through.',
  'It does not have to be correct. It only has to be convincing.',
  'We should not let perfect be the enemy of good.',
  'Once is happenstance, twice is coincidence, three times is enemy action.',
  'To see is to forget the name of the thing one sees',
  'Pain is inevitable. Suffering is optional.',
  "If you don't know what you're doing, then neither does your enemy!",
  'How do you eat an elephant? One bite at a time.',
];

function App() {
  return (
    <>
      <div className="container">
        <h1>Search For Quotes!</h1>
        <SearchableList quoteList={quotes} />
      </div>
    </>
  );
}

export default App;
