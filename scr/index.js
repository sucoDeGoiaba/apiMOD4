import express from 'express'
import controllerEstoque from './controller/controllerEstoque.js'
import db from './database/sqliteEstoque.js'

const app = express()

app.use(express.json())

controllerEstoque(app, db)

app.listen(3000)

