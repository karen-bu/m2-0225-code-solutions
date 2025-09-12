import { useEffect, useState } from 'react';
import { toDollars } from '../lib/to-dollars';
import { type Product } from '../lib/type-product';
import { Link, useParams, useNavigate } from 'react-router';

export function ProductDetailPage() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const { productId } = useParams();
  const navigation = useNavigate();

  function saveClick() {
    window.alert('Added product to cart!');
    navigation('/');
  }

  useEffect(() => {
    async function fetchProductDetails(productId: string | undefined) {
      const req = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      try {
        const res = await fetch(`/api/products/${productId}`, req);
        if (!res.ok) {
          throw new Error(`Fetch Error ${res.status}`);
        }

        const product = (await res.json()) as Product;
        setProduct(product);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProductDetails(productId);
  }, [productId]);

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
          Error! {error instanceof Error ? error.message : 'unknown error'}
        </h1>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="product-details-back-link">
        <Link to="/"> « Back to Catalog </Link>
      </div>
      <div className="product-details">
        <div className="product-details-column">
          <img src={product!.imageUrl} alt={product!.name} />
        </div>

        <div className="product-details-column">
          <div>
            <h1>{product!.name}</h1>
          </div>
          <div>
            <h2>{toDollars(product!.price)}</h2>
          </div>
          <div>
            <h3>{product!.shortDescription}</h3>
          </div>
          <div>
            <p>{product!.longDescription}</p>
          </div>
          <div>
            <button onClick={saveClick}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
