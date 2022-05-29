import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
    res.json({
        ok: true,
        msg: 'Hello man'
    })
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})