const app = require('express')();
const cors = require('cors');
const { cats, dogs } = require('./catsanddogs');
const PORT = 3100;

app.use(cors());

app.get('/', (req, res) => {
  let instructions = {
    'Welcome': 'This is a Cat / Dog Photo API',
    'Routes': {
      '/': 'This home page. With instructions!',
      '/allcats': 'Returns array of every cat photo URL.',
      '/alldogs': 'Returns array of every dog photo URL.',
      '/newcat/:url': 'Adds :url to the cat photo database.',
      '/newdog/:url': 'Adds :url to the dog photo database.',
    },
  };
  res.json(instructions);
});
app.get('/allcats', (req, res) => {
  res.json(cats);
});
app.get('/alldogs', (req, res) => {
  res.json(dogs);
});
app.get('/newcat/:url', (req, res) => {
  const { url } = req.params;
  cats.push(url);
  res.json({'added cat': url});
});
app.get('/newdog/:url', (req, res) => {
  const { url } = req.params;
  dogs.push(url);
  res.json({'added dog': url});
});

app.listen(PORT, () => {
  console.log('backend running on port ' + PORT);
});
