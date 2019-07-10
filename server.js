const express = require('express');
const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

const server = express();
server.use(express.json());

server.use('/posts', postRouter)
server.use('/users', userRouter)

//custom middleware

function logger(req, res, next) {
  const date = new Date();
  console.log(`Shebang!! you made a ${req.method} request to ${req.url} on ${date}`)
  next();
};

server.listen(3000, () => console.log("listening on port 3000"))

module.exports = server;
