const {Sequelize} = require("sequelize")

const db = new Sequelize({
    database: "chat_api",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "gerflores",
    dialect: "postgres"
    
})

module.exports= db;