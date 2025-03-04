console.log('Hello, World');
// print('Hello, World');
const express = require("express");
//import 'package:express/express.dart'
const PORT = 3000;

const app = express();

// CREATING AN API
// http://<youripaddress>/hello-world
app.get("/hello-world", (req, res) => {
  res.json({hi:"hello world"});
});
// GET, PUT, POST, DELETE, UPDATE -> CRUD

app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});