// IMPORTS FROM PACKAGES
const express = require("express");

// IMPORTS FROM OTHER FILES =
const authRouter = require("./routes/auth");

// INIT 
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});