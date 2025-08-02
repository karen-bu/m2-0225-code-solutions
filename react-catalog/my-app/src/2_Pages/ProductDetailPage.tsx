import { useEffect, useState } from 'react';
import { type Product, readProduct, toDollars } from '../lib';
import { useParams, useNavigate, Link } from 'react-router';

export function ProductDetailPage() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState<unknown>();

  const { productId } = useParams();
  const navigation = useNavigate();

  function saveClick() {
    window.alert('Added product to cart!');
    navigation('/');
  }

  useEffect(() => {
    async function loadProductDetails(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (error) {
        setLoadingError(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProductDetails(Number(productId));
  }, [productId]);

  if (isLoading) {
    return (
      <div className="catalog-header">
        <h1>Stocking the shelves ...</h1>
      </div>
    );
  }

  if (loadingError || !product) {
    return (
      <div className="product-loading-error">
        <h1>Error Loading Item {productId}</h1>
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
          <img src={product.imageUrl} alt={product.name} />
        </div>

        <div className="product-details-column">
          <div>
            <h1>{product.name}</h1>
          </div>
          <div>
            <h2>{toDollars(product.price)}</h2>
          </div>
          <div>
            <h3>{product.shortDescription}</h3>
          </div>
          <div>
            <p>{product.longDescription}</p>
          </div>
          <div>
            <button onClick={saveClick}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
