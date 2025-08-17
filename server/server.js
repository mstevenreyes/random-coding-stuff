const express = require('express')
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({"users": ["user1One", "user2", "user3"]})
})

app.listen(8080, ()=> { console.log('server started at port  8080')}) 