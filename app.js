const express = require('express');
const chalk = require('chalk');
const volleyball = require('volleyball');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    console.log(chalk.black(`[twittin] Verb: ${req.method} URL: ${req.url}`));
    next();
});


app.get('/', function (req, res) {
    res.send('Hello World\n');
});

app.listen(3000, function () {
    console.log(chalk.black(`[twittin] Server started on port ${port}...`));
});
