const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./Routes/UserRoutes');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// API routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
