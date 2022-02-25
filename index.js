import express from 'express'
import bodyParser from 'body-parser'
import usersRouter from './routers/users.js'



const app = express()
const PORT = 2000;

app.use(bodyParser.json())
app.use("/users", usersRouter)
app.get("/",(req, res) =>{
    res.send("hello atef you will get this job")
})

app.listen(PORT, console.log(`we are online on http://localhost${PORT}`));
