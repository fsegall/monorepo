import express from 'express';
import cors from 'cors';

const app = express();

const port = '3001';

app.use(cors());

app.get('/data', (req, res) => {
    res.json({foo: 'data returned from the server.'});
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
