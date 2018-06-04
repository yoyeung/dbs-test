import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

const FOLDER = 'FOLDER';
const FILE = 'FILE';
let state = [{
  type: FOLDER,
  name: 'Folder1',
  content: [{
    type: FILE,
    name: 'File0',
    content: 'This is file0 content'
  }]
},{
  type: FOLDER,
  name: 'Folder2',
  content: [{
    type: FILE,
    name: 'File1',
    content: 'This is file1 content'
  },{
    type: FILE,
    name: 'File2',
    content: 'This is file2 content'
  }]
},{
  type: FILE,
  name: 'File3',
  content: 'This is file3 content'
}]

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/api/getListItem', function(req, res) {
  res.set('Content-Type', 'text/json');
  res.send(state);
});

app.post('/api/addItem', function(req, res) {
  res.set('Content-Type', 'text/json');
  if (req.body && req.body.name) {
    state = [
      ...state,
      {
        type: FILE,
        name: req.body.name,
        content: ''
      }
    ];
  }
  res.send(state);
  
});

app.listen(5000, () => {
  console.log('Dev app listening on port 5000!');
});
