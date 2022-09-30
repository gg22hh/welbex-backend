import express from 'express';
import mongoose from 'mongoose';
import { create, getAll } from './controllers/TableController.js';

mongoose
  .connect(
    'mongodb+srv://g322h:Ca_22zxz@cluster0.sk1b6ts.mongodb.net/blog?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());

app.get('/records', getAll);
app.post('/records', create);

app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Server OK');
});
