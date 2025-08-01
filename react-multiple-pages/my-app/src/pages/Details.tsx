import { useEffect, useState } from 'react';
import { type Item, readItem } from '../lib/read';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

export function Details() {
  const [item, setItem] = useState<Item>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const { itemId } = useParams();
  const navigate = useNavigate();

  function saveClick() {
    window.alert('saved!');
    navigate(-1);
  }

  useEffect(() => {
    async function loadItem(itemId: number) {
      try {
        const item = await readItem(itemId);
        setItem(item);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (itemId) {
      setIsLoading(true);
      loadItem(+itemId);
    }
  }, [itemId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !item) {
    return (
      <div>
        Error Loading Item {itemId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, image, description } = item;
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" />
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={image}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold">{name}</h2>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex-auto p-6">
        <button onClick={saveClick}>Save</button>
      </div>
    </div>
  );
}
