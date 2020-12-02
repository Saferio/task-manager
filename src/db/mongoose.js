const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DB_CON, {
    useNewUrlParser: true,
    useCreateIndex: true
})