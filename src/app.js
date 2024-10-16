import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const  app = express()

app.use(cors())
app.use(express.json({limit:'16kb'}))
app.use(urlencoded({limit:'16kb'}))
app.use(express.static("public"))
app.use(cookieParser())


export {app}