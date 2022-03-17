class EstoqueDAO {
    constructor(db){
        this.db = db
    }  

    mostrarEstoque = ()=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM ESTOQUE', (erro, rows)=>{
                (erro)? reject(erro) : resolve ({'estoque' : rows})
            })
        })
    }

    mostraProdPorID = (id)=> {
        return new Promise((resolve, reject) =>{
            this.db.all('SELECT * FROM ESTOQUE WHERE id = ?', id, (erro, rows)=>{
                (erro)? reject(erro) : resolve ({'estoque' : rows})
            })
        })
    }

    insereProduto = (novoProd)=> {
        return new Promise((resolve, reject) =>{
            this.db.run('INSERT INTO ESTOQUE(nome, tipo, preco, quantidade) VALUES(?, ?, ?, ?)', novoProd.nomeProd, novoProd.tipo, novoProd.preco, novoProd.quantidade, (erro)=>{
                (erro)? reject(erro) : resolve ({"msg" : `Item adiciondo ao Estoque.`})
            })
        })
    }

    atualizaProduto = (id, prod) =>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE ESTOQUE SET nome = ?, tipo = ?, preco = ?, quantidade = ? WHERE id = ?',
            prod.nomeProd, prod.tipo, prod.preco, prod.quantidade, id,
            (erro)=>{
                (erro)? reject(erro) : resolve ({"msg" : `Item atualizado no Estoque.`})
            })
        })
    }

    deletaUsuario = (id)=> {
        return new Promise((resolve, reject) =>{
            this.db.run('DELETE FROM ESTOQUE WHERE ID = ?', id, (erro)=>{
                (erro)? reject(erro) : resolve ({"msg" : `Item de id ${id} removido do Estoque.`})
            })
        })
    }
}
            
export default EstoqueDAO