const { Pool } = require('pg')
const pool = new Pool({
    connectionString : 'postgres://oqzawffryynovx:e58b480deda207affbfe4bdc8d5cc257c709214be21ae40871070e4c654b915d@ec2-54-147-203-50.compute-1.amazonaws.com:5432/d7685c1sk3jat',
    ssl:{
        rejectUnauthorized: false
    }
    // host: 'ec2-54-147-203-50.compute-1.amazonaws.com',
    // user: 'oqzawffryynovx',
    // password: 'e58b480deda207affbfe4bdc8d5cc257c709214be21ae40871070e4c654b915d',
    // database: 'd7685c1sk3jat',
    // port: '5432'
})
module.exports = {
    pool
}