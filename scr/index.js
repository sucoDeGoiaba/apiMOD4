import express from 'express'
import controllerEstoque from './controller/controllerEstoque.js'

const app = express()

controllerEstoque(app)

app.listen(3000)

