import './App.css';
import { RotatingBanner } from './RotatingBanner';

const animals = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <>
      <RotatingBanner animals={animals} />
    </>
  );
}

export default App;
