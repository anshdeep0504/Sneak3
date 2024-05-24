// server.js
const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Use body-parser middleware
app.use()(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)"; // Removed backticks from column names
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) => { // Removed unnecessary array brackets from values
        if (err) {
            console.error('Error inserting into database:', err);
            return res.status(500).json({ error: "Error inserting into database" }); // Return error response with status code
        }
        return res.status(200).json({ message: "User signed up successfully" }); // Return success response with status code
    });
});

const PORT = process.env.PORT || 8081; // Use environment port if available
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
