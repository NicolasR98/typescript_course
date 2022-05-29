var express = require('express');
var app = express();
var PORT = 3000;
app.get('/', function (_req, res) {
    res.json({
        ok: true,
        msg: 'Hello man'
    });
});
app.listen(PORT, function () {
    console.log("Server started at port ".concat(PORT));
});
