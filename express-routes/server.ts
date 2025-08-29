import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

app.get('/', (req, res) => {
  res.send('this is working');
});

app.get('/notes', (req, res) => {
  res.send('this is working x2');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`the noteID is: ${noteId}`);
});
