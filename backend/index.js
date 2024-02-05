const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDb = require('./config/db.js');
const AuthRoute = require('./routes/AuthRoute.js');
const UserRoute = require('./routes/UserRoute.js');
const EventRoute = require('./routes/EventRoute.js');
require('dotenv').config();

const app = express();
connectDb();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({ limit:'30mb',extended: true }));
app.use(cookieParser());

app.use('/api/auth',AuthRoute);
app.use('/api/users',UserRoute);
app.use('/api/event',EventRoute); 
const port = process.env.PORT;
app.listen(port);
