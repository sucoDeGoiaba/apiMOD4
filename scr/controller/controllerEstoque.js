import Estoque from "../model/estoque.js"

const controllerUsuario = (app, db) =>{
    const estoqueModel = new Estoque(db)

    app.get('/produtos', async (req, res) =>{
        res.json(await estoqueModel.mostrarEstoque())

    })

    app.get('/id/:id', async (req, res) => {
        const id = req.params.id
        res.json(await estoqueModel.mostraProdPorID(id))

    })

    app.post('/addProd', async (req, res) =>{
        const body = req.body
        res.json(await estoqueModel.insereProduto(body))

    }) 

    app.put('/produtos/id/:id', async (req, res)=>{
        const id = req.params.id
        const body = req.body

        res.json(await estoqueModel.atualizaProduto(id, body))
    })


    app.delete('/id/:id', async (req, res) =>{
        const id = req.params.id
        res.json(await estoqueModel.deletaUsuario(id))
    })
}


export default controllerUsuario
