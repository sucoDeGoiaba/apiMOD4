class Estoque {
    constructor(nome, tipo, quantidade, preco){
        this.nome = this._validandoStrings(nome)
        this.tipo = this._validandoStrings(tipo)
        this.quantidade = this;this._validandoQuantidade(quantidade)
        this.preco = this._validandoPreco(preco)
    }

    _validandoStrings(input){
        if(input.lenght > 0){
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

