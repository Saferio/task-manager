const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')


const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     res.status(503).send("Server is in maintanace")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})



// const main = async() => {
//     // const task = await Task.findById("5fc3f05ffbbea40e14ae0819")
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById("5fc3e7c67e9c833ca0306397")
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()