const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const { connectMongo } = require('./config/mongo');
connectMongo().catch(err => console.error('MongoDB connection failed:', err));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET || 'campus-eats-dev-secret',
  resave: false,
  saveUninitialized: false,
}));

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

const db = require('./config/db');

app.get('/db-test', async (req, res) => {
  const result = await db.one('SELECT NOW() AS current_time');
  res.json(result);
});


module.exports = app;