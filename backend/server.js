const express = require("express")
const connectDB = require("./config/db")
require('dotenv').config()
const briefRoutes = require("./routes/brief.routes")

const app = express()
const PORT = process.env.PORT || 7462

app.use(express.json())

connectDB()

app.use("/api/briefs", briefRoutes)

app.listen(PORT, () => {
    console.log(`Brief server is running on PORT ${PORT}`)
})
