const express = require('express');


const tracker = express();

tracker.get('/', (req, res) => res.status(200).end('in progress'));

tracker.listen(3001);
