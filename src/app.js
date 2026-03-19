const express = require("express")
const userController = require("./controllers/userController")
const app = express()


app.get("/",(request, response) => {
  response.send('aaaaaaaaaaaaaaaaaaaaaaa')

  })
app.use(express.json())

app.post("/users", (req, res) => {
    const name = req.body.name
    res.send("Estamos testando")
})

  app.get("/users", userController.getAllUsers)
module.exports = app

