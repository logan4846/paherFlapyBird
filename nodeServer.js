var proxy = require('html2canvas-proxy');
const express = require('express');
const path = require('path');
const app = express();
app.use('/', proxy());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3001,()=>{
    console.log('server is running at port 3001');
});