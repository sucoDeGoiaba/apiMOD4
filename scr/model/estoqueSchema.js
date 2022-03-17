class EstoqueSchema {
    constructor(nomeProd, tipo, quantidade, preco){
        this.nomeProd = this._validandoStrings(nomeProd)
        this.tipo = this._validandoStrings(tipo)
        this.quantidade = this._validandoQuantidade(quantidade)
        this.preco = this._validandoPreco(preco)
    }

    _validandoStrings(input){
        if(input.length > 0){
            return input
        } else {
            throw new Error("Informação inválida.")
        }   
    }

    _validandoQuantidade(input){
        if(input >= 0 ){
            return input
        } else {
            throw new Error("Quantidade inválida.")
        }
    }

    _validandoPreco(input){
        if(input > 0){
            return input
        } else {
            throw new Error("Preço inválido.")
        }   
    }
}

export default EstoqueSchema
