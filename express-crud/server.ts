import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';
import { s } from 'react-router/dist/development/index-react-server-client-Bi_fx8qz';
import { A } from 'react-router/dist/development/routeModules-BR2FO0ix';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// GET /api/grades returns all rows from the grades table. The client should receive an array of objects.
// If there are no rows, return an empty array.

app.get('/api/grades', async (req, res, next) => {
  try {
    const sqlGetGrades = `
    select *
    from "grades";
    `;

    const result = await db.query(sqlGetGrades);

    const grades = result.rows;
    if (!grades) {
      throw new ClientError(500, 'query has failed');
    }

    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

// GET /api/grades/:gradeId returns the row from the grades table with the given gradeId.
// The client should receive an object, not an array.

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);

    const sqlGetGradeById = `
    select *
    from "grades"
    where "gradeId" = $1;
    `;

    const params = [gradeId];
    const result = await db.query(sqlGetGradeById, params);
    if (!result) {
      throw new ClientError(500, 'query has failed');
    }

    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} was not found`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

// POST /api/grades inserts a new grade into the grades table and returns the entire created grade.
// The client should receive an object, not an array.
// Your code should require that the client includes the name, course, and score in the JSON request body.

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    validateGrade(name, course, score);

    const sqlInsertGrade = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;

    const params = [name, course, score];
    const result = await db.query(sqlInsertGrade, params);

    const insertedGrade = result.rows[0];
    if (!insertedGrade) {
      throw new ClientError(500, 'the query has failed');
    }
    res.status(201).json(insertedGrade);
  } catch (err) {
    next(err);
  }
});

// PUT /api/grades/:gradeId updates the grade in the grades table with the given gradeId and returns the entire updated grade.
// The client should receive an object, not an array.
// Your code should require that the client includes the name, course, and score in the JSON request body.

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    validateGradeId(gradeId);
    validateGrade(name, course, score);

    const sqlUpdateScore = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *;
    `;

    const params = [name, course, score, gradeId];
    const result = await db.query(sqlUpdateScore, params);
    if (!result) {
      throw new ClientError(500, 'query has failed');
    }

    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      throw new ClientError(404, 'grade does not exist in the database');
    }

    res.status(200).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/grades/:gradeId deletes the grade in the grades table with the given gradeId.

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);

    const sqlDeleteGrade = `
      delete
      from "grades"
      where "gradeId" = $1
      returning *;
      `;

    const params = [gradeId];
    const result = await db.query(sqlDeleteGrade, params);

    if (!result) {
      throw new ClientError(500, 'query has failed');
    }

    const deletedGrade = result.rows[0];
    if (!deletedGrade) {
      throw new ClientError(404, `grade: ${gradeId} was not found`);
    }

    res.status(204).json(deletedGrade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

// Validation Functions
function validateGrade(name: string, course: string, score: string) {
  if (!name) {
    throw new ClientError(400, 'name is required');
  }
  if (!course) {
    throw new ClientError(400, 'course is required');
  }
  if (!score) {
    throw new ClientError(400, 'score is required');
  }
  if (!Number.isInteger(+score)) {
    throw new ClientError(400, 'score must be an integer');
  }
  if (+score > 100) {
    throw new ClientError(400, 'score must be an integer between 0 and 100');
  }
  if (+score < 0) {
    throw new ClientError(400, 'score must be an integer between 0 and 100');
  }
}

function validateGradeId(gradeId: string) {
  if (!Number.isInteger(+gradeId)) {
    throw new ClientError(400, 'gradeId is required and must be an integer');
  }
}
