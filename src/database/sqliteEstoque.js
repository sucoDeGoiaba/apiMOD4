import sqlite3 from 'sqlite3'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/estoque.db'
const db = new sqlite3.Database(filePath);

process.on('SIGINT', () =>
    db.close(() => {
        console.log('Conexão fechada com o Banco de Dados.');
        process.exit(0);
    })
);

export default db

