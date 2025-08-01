import { Link } from 'react-router';
import { products } from '../lib/data';
import { toDollars } from '../lib';

export function Catalog() {
  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <h1>Product Catalog</h1>
      </div>
      <Link
        key={products[0].productId}
        to={`product-details/${products[0].productId}`}>
        <div className="product-card">
          <div className="product-card-image">
            <img src={products[0].imageUrl} alt={products[0].name} />
          </div>
          <div className="product-card-title">
            <h2>{products[0].name}</h2>
          </div>
          <div className="product-card-cost">
            <h3>{toDollars(products[0].price)}</h3>
          </div>
          <div className="product-card-description">
            <div className="product-card-short-description">
              <h4>{products[0].shortDescription}</h4>
            </div>
            <div className="product-card-long-description">
              <p>{products[0].longDescription}</p>
            </div>
          </div>
        </div>
      </Link>

      <Link
        key={products[0].productId}
        to={`product-details/${products[0].productId}`}>
        <div className="product-card">
          <div className="product-card-image">
            <img src={products[0].imageUrl} alt={products[0].name} />
          </div>
          <div className="product-card-title">
            <h2>{products[0].name}</h2>
          </div>
          <div className="product-card-cost">
            <h3>{toDollars(products[0].price)}</h3>
          </div>
          <div className="product-card-description">
            <div className="product-card-short-description">
              <h4>{products[0].shortDescription}</h4>
            </div>
            <div className="product-card-long-description">
              <p>{products[0].longDescription}</p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        key={products[0].productId}
        to={`product-details/${products[0].productId}`}>
        <div className="product-card">
          <div className="product-card-image">
            <img src={products[0].imageUrl} alt={products[0].name} />
          </div>
          <div className="product-card-title">
            <h2>{products[0].name}</h2>
          </div>
          <div className="product-card-cost">
            <h3>{toDollars(products[0].price)}</h3>
          </div>
          <div className="product-card-description">
            <div className="product-card-short-description">
              <h4>{products[0].shortDescription}</h4>
            </div>
            <div className="product-card-long-description">
              <p>{products[0].longDescription}</p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        key={products[0].productId}
        to={`product-details/${products[0].productId}`}>
        <div className="product-card">
          <div className="product-card-image">
            <img src={products[0].imageUrl} alt={products[0].name} />
          </div>
          <div className="product-card-title">
            <h2>{products[0].name}</h2>
          </div>
          <div className="product-card-cost">
            <h3>{toDollars(products[0].price)}</h3>
          </div>
          <div className="product-card-description">
            <div className="product-card-short-description">
              <h4>{products[0].shortDescription}</h4>
            </div>
            <div className="product-card-long-description">
              <p>{products[0].longDescription}</p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        key={products[0].productId}
        to={`product-details/${products[0].productId}`}>
        <div className="product-card">
          <div className="product-card-image">
            <img src={products[0].imageUrl} alt={products[0].name} />
          </div>
          <div className="product-card-title">
            <h2>{products[0].name}</h2>
          </div>
          <div className="product-card-cost">
            <h3>{toDollars(products[0].price)}</h3>
          </div>
          <div className="product-card-description">
            <div className="product-card-short-description">
              <h4>{products[0].shortDescription}</h4>
            </div>
            <div className="product-card-long-description">
              <p>{products[0].longDescription}</p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        key={products[0].productId}
        to={`product-details/${products[0].productId}`}>
        <div className="product-card">
          <div className="product-card-image">
            <img src={products[0].imageUrl} alt={products[0].name} />
          </div>
          <div className="product-card-title">
            <h2>{products[0].name}</h2>
          </div>
          <div className="product-card-cost">
            <h3>{toDollars(products[0].price)}</h3>
          </div>
          <div className="product-card-description">
            <div className="product-card-short-description">
              <h4>{products[0].shortDescription}</h4>
            </div>
            <div className="product-card-long-description">
              <p>{products[0].longDescription}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
