import express from 'express'
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'
import authenticateUser from './middleware/auth.js'

const app = express()

import dotenv from 'dotenv'
import connectDB from './db/connect.js'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'

import authRouter from './routes/authRouter.js'
import jobsRouter from './routes/jobsRouter.js'

if(process.env.NODE_ENV!== 'production'){
    app.use(morgan('dev'))
}

app.use(express.json())


app.get('/' ,(req , res)=>{
    
    res.send('Hello')
} )

app.use('/api/v1/auth' , authRouter)
app.use('/api/v1/jobs' , authenticateUser ,jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port , ()=>{
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()