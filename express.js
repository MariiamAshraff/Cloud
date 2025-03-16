const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());


app.use(express.json());


app.post('/data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);

    
    res.json({ message: 'Data received successfully!', data });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});