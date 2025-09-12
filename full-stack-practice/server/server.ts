import 'dotenv/config';
import pg, { Client } from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: number;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sqlGetProducts = `
    select *
    from "products";
    `;

    const result = await db.query<Product[]>(sqlGetProducts);
    const products = result.rows;

    if (!products) throw new ClientError(404, 'products not found');

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    validateProductId(productId);

    const sqlGetProduct = `
    select *
    from "products"
    where "productId" = $1;
    `;

    const params = [productId];
    const result = await db.query<Product[]>(sqlGetProduct, params);
    const product = result.rows[0];

    if (!product) throw new ClientError(404, `product: ${productId} not found`);

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

function validateProductId(productId: string) {
  if (!Number.isInteger(+productId)) {
    throw new ClientError(400, 'productId is required and must be an integer');
  }
}

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
