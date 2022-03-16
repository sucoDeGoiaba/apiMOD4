import EstoqueDAO from "../DAO/estoqueDAO.js";
import EstoqueSchema from "./estoqueSchema.js";

class Estoque {
    constructor(db){
        this.dao = new EstoqueDAO(db)
    }

    mostrarEstoque = async ()=> {
        try{
            return await this.dao.mostrarEstoque()
        } catch(erro) {
            return {
                'msg' : erro.message
            }
        }
    }

    mostraProdPorID = async (id)=> {
        try{
            return await this.dao.mostraProdPorID(id)
        } catch(erro) {
            return {
                'msg' : erro.message
            }
        }
    }

    insereProduto = async (produto) => {
        try {
            const novoProd = new EstoqueSchema(produto.nomeProd, produto.tipo, produto.quantidade, produto.preco)
            return await this.dao.insereProduto(novoProd)
        } catch(erro){
            return {
                'msg' : erro.message
            }
        }
    }

    atualizaProduto = async (id, prod)=>{
        try{
            const prodAtt = new EstoqueSchema(prod.nomeProd, prod.tipo, prod.quantidade, prod.preco)
            return await this.dao.atualizaProduto(id, prodAtt)
        } catch(erro){
            return {
                'msg' : erro.message
            }
        }
    }

    deletaUsuario = async (id)=> {
        try{
            return await this.dao.deletaUsuario(id)
        } catch(erro) {
            return {
                'msg' : erro.message
            }
        }
    }
}

export default Estoque