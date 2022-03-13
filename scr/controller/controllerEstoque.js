import Estoque from "../model/modelEstoque.js"

const controllerUsuario = (app) =>{
    // Pega toda a info da Tabela
    app.get('/', (req, rep) =>{
       
    })

    // Pega row de acordo com ID
    app.get('/id/:id', (req, res) => {
        const id = req.params.id
        // res.send(id)
    })

    // Insere uma nova row na tabela de acordo com o JSON enviado
    app.post('/addProd', (req, res) =>{
        // Recebe o body da requisição, contendo o JSON
        const body = req.body

        try {
            const novoProd = new Estoque(body.nomeProd, body.tipo, body.quantidade, body.preco)

            res.json({
                "nomeProd" : novoProd.nomeProd,
                "tipo" : novoProd.tipo,
                "quantidade" : novoProd.quantidade,
                "preco" : novoProd.preco
                // "msg" : "Foi buceta",
                // "item" : novoProd
            })
        } catch(error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
        // res.send(body)
    }) 

    // Apaga row de acordo com ID
    app.delete('/id/:id', (req, res) =>{
        
    })
}

// Exportando pro Index
export default controllerUsuario
