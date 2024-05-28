const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Database/db');
const userRoutes = require('./Routes/userRoutes');
const { notFound, errorHandler } = require('./Middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3699;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
