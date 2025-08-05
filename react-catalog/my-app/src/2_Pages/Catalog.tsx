import { Link } from 'react-router';
import { toDollars } from '../lib';
import { type Product, readCatalog } from '../lib';
import { useState, useEffect } from 'react';

export function Catalog() {
  const [inventory, setInventory] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState<unknown>();

  useEffect(() => {
    async function fetchCatalog() {
      try {
        const productList = await readCatalog();
        setInventory(productList);
      } catch (error) {
        setLoadingError(error);
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

  if (loadingError) {
    return (
      <div>
        <h1>
          Error!{' '}
          {loadingError instanceof Error
            ? loadingError.message
            : 'unknown error'}{' '}
        </h1>
      </div>
    );
  }

  const productList = inventory.map((product) => (
    <Link key={product.productId} to={`product-details/${product.productId}`}>
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
