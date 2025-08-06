import './App.css';
import { useState } from 'react';
import { Modal } from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDelete() {
    window.alert('You have deleted this!');
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>DELETE ME!!!</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <p>Are you sure you want to delete this? 🥺</p>
        </div>
        <div>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
