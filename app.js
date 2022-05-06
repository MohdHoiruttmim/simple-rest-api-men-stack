const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express()

app.listen(5000, () => {
    console.log(`server is running on http://localhost:5000`);
})
