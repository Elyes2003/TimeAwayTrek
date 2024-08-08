require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const leaveRoutes = require('./routes/leaveRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Enable CORS for a specific origin and with credentials
const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true
};

app.use(cors(corsOptions));

// DB connect
mongoose.connect('mongodb://admin:admin@localhost:27017/PFA?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
})
.catch((error) => {
    console.log(error)
});

const db = mongoose.connection;

db.on('error', () => {
    console.log("Connection failed!");
});
db.once('open', () => {
    console.log("Connection success");
});

// Use user routes with a base path
app.use('/api', userRoutes);

app.use('/api/leaves', leaveRoutes);

// Root route for basic server check
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

