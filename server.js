const { configDotenv } = require("dotenv")
const express = require("express")
const connectDB = require("./db/db")
const app = express()
const routes = require("./routes/routes.js")

// dotenv configuration
configDotenv()

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database connection
connectDB()

//routes
app.use('/api/v1', routes);

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})