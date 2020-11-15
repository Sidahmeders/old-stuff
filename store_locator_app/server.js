const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config({ path: './.env'});

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_KEY, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.once('open', () => console.log('mongoDB connection is Up and running...'));

app.use('/', require('./routes/store.routes'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port} in the ${process.env.NODE_ENV} mode..`))

