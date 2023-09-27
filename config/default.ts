const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

export default {
    port: 3000,
    dbPassword: process.env.DB_PASSWORD,
    dbUri: `mongodb://${dbUser}:${dbPassword}@ac-bzc1zje-shard-00-00.qsa3erd.mongodb.net:27017,ac-bzc1zje-shard-00-01.qsa3erd.mongodb.net:27017,ac-bzc1zje-shard-00-02.qsa3erd.mongodb.net:27017/?ssl=true&replicaSet=atlas-hmjdt6-shard-0&authSource=admin&retryWrites=true&w=majority`
}