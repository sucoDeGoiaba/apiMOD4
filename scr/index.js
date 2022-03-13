import express from 'express'
import controllerEstoque from './controller/controllerEstoque.js'

const app = express()

app.use(express.json())

controllerEstoque(app)

app.listen(3000)

