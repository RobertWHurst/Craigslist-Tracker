const express = require('express');


const tracker = express();

tracker.get('/', (req, res) => res.status(200).end('hi'));
