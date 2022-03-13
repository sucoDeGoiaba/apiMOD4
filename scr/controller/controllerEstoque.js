const controllerUsuario = (app) =>{
    // Pega toda a info da Tabela
    app.get('/', (req, rep) =>{
       
    })

    // Pega row de acordo com ID
    app.get('/id/:id', (req, res) => {

    })

    // Insere uma nova row na tabela de acordo com o JSON enviado
    app.post('insertProd/', (req, res) =>{

    })

    // Apaga row de acordo com ID
    app.delete('/id/:id', (req, res) =>{

    })
}

// Exportando pro Index
export default controllerUsuario