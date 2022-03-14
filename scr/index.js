import express from 'express'
import controllerEstoque from './controller/controllerEstoque.js'
import {openDb} from './database/database.js'


const app = express()
const db = openDb()

app.use(express.json())

controllerEstoque(app, db)

app.listen(3000)

