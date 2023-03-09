const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const todoRouter = require("./routers/todos.router");
const userRouter = require("./routers/users.router");

app.use("/todos",todoRouter);
app.use("/users",userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}/todos`);
});
