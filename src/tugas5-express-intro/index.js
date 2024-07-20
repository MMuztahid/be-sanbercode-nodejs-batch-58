const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//route /hello
app.get('/hello', (req, res) => {
    res.send(
        {
            "message": "Success fetch message",
            "data": "Hello World!"
        }
    );
});

//route /user
app.get('/user', (req, res) => {
    res.send(
        {
            "message": "Success fetch user",
            "data": {
                "id": 1,
                "name": "Budi",
                "username": "budidu",
                "email": "budidu@mail.com"
            }
        }
    );
});

// Melayani file statis dari direktori "public"
app.use(express.static(path.join(__dirname, 'public')));
  
app.listen(port, () => {
    console.log(`Server is running at <http://localhost>:${port}`);
});