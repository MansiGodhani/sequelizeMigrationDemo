const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
const db = require('./models');

// app.get('/',(req,res)=>res.send('Hello...'));

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.listen(port,() => {
    db.sequelize.sync();
    console.log(`Server running on port ${port}`);
});