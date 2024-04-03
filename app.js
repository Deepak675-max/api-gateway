const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", proxy("http://localhost:8003"));
app.use("/order", proxy("http://localhost:8006"));
app.use("/product", proxy("http://localhost:8004"));
app.use("/cart", proxy("http://localhost:8005"));


const port = 8000;

app.listen(port, () => {
    console.log(`Gateway is listening on the port ${port}`);
})
