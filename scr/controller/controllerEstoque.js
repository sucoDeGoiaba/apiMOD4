import Estoque from "../model/estoque.js"

const controllerUsuario = (app, db) =>{
    const estoqueModel = new Estoque(db)
    // Pega toda a info da Tabela
    app.get('/produtos', async (req, res) =>{
        res.json(await estoqueModel.mostrarEstoque())
    })

    // Pega item de acordo com ID
    app.get('/id/:id', async (req, res) => {
        const id = req.params.id
        res.json(await estoqueModel.mostraProdPorID(id))
    })

    // Insere um novo item na tabela de acordo com o JSON enviado
    app.post('/addProd', async (req, res) =>{
        // Recebe o body da requisição, contendo o JSON
        const body = req.body
        res.json(await estoqueModel.insereProduto(body))
    }) 

    app.put('/produtos/id/:id', async (req, res)=>{
        const id = req.params.id
         // Recebe o body da requisição, contendo o JSON
        const body = req.body

        res.json(await estoqueModel.atualizaProduto(id, body))
    })

    // Apaga item de acordo com ID
    app.delete('/id/:id', async (req, res) =>{
        const id = req.params.id
        res.json(await estoqueModel.deletaUsuario(id))
    })
}

// Exportando pro Index
export default controllerUsuario
