const controllerUsuario = (app) =>{
    app.get('/', (req, rep) =>{
        rep.send('Yamete')
    })

    app.get('/id/:id', (req, res) => {

    })

    app.post('')

    app.delete('/id/:id', (req, res) =>{
        
    })
}

export default controllerUsuario