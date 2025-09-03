import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(errorMiddleware);

app.get('/api/countries', async (req, res, next) => {
  try {
    const sqlCountries = `
    select count(*) as "cities",
          "countries"."name",
          "countryId"
    from "countries"
    join "cities" using ("countryId")
    group by "countries"."countryId";
    `;
    const result = await db.query(sqlCountries);
    const cityCount = result.rows;
    res.json(cityCount);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    if (cityId === undefined) {
      throw new ClientError(400, 'cityId is required');
    }
    if (!Number.isInteger(+cityId)) {
      throw new ClientError(400, 'cityId must be an integer');
    }

    const sqlCityId = `
    select "cityId",
            "countries"."name" as "country",
            "cities"."name" as "city"
    from "cities"
    join "countries" using ("countryId")
    where "cityId" = $1;
    `;
    const params = [cityId];
    const result = await db.query(sqlCityId, params);
    const cityInfo = result.rows[0];

    if (!cityInfo) {
      throw new ClientError(404, `cityId: ${cityId} not found`);
    }

    res.json(cityInfo);
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
