import knex from "knex";

const db = knex({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'',
        database:'eye_clinic_db'
    }
})

export default db;