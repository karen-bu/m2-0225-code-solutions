import { Link } from 'react-router';
import { toDollars } from '../lib/to-dollars';
import { type Product } from '../lib/type-product';
import { useState, useEffect } from 'react';

export function Catalog() {
  const [inventory, setInventory] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchCatalog(): Promise<void> {
      const req = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const res = await fetch('/api/products', req);
        if (!res.ok) {
          throw new Error(`Fetch Error ${res.status}`);
        }
        const inventory = (await res.json()) as Product[];
        setInventory(inventory);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCatalog();
  }, []);

  if (isLoading) {
    return (
      <div className="catalog-header">
        <h1>Stocking the shelves ...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>
          Error! {error instanceof Error ? error.message : 'unknown error'}{' '}
        </h1>
      </div>
    );
  }

  const productList = inventory.map((product) => (
    <Link key={product.productId} to={`products/${product.productId}`}>
      <div className="product-card">
        <div className="product-card-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-card-title">
          <h2>{product.name}</h2>
        </div>
        <div className="product-card-cost">
          <h3>{toDollars(product.price)}</h3>
        </div>
        <div className="product-card-description">
          <div className="product-card-short-description">
            <h4>{product.shortDescription}</h4>
          </div>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <div className="catalog-header">
        <h1>Product Catalog</h1>
      </div>
      <div className="catalog-container">{productList}</div>
    </div>
  );
}
