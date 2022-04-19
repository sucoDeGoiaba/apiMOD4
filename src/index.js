import express from 'express'
import controllerEstoque from './controller/controllerEstoque.js'
import db from './database/sqliteEstoque.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

controllerEstoque(app, db)

app.listen(3000)

