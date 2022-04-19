import db from "./sqliteEstoque.js";

const ESTOQUE_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "estoque" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "tipo" TEXT,
    "preco" REAL(2),
    "quantidade" INTEGER
);`;

function criandoTabelaEstoque() {
    db.run(ESTOQUE_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de estoque.");
    });
}

criandoTabelaEstoque()