import "dotenv/config"
import express from 'express'
import userRoutes from './rourtes/user.route.js'
import taskRoutes from './rourtes/task.routes.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)

app.listen(PORT,()=>{
    console.log('Server rodando http://localhost:'+PORT)
})