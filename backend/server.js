const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Database/db');
const userRoutes = require('./Routes/userRoutes');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { notFound, errorHandler } = require('./Middleware/errorMiddleware');

dotenv.config();



connectDB();

const basicLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.',
  });
  

const app = express();
app.use(basicLimiter)
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3699;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
