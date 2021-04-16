import pkg from 'pg';
const {Pool} = pkg;

const connectionString = process.env.PG_CONN;

const pool = new Pool({
    connectionString
});

export default pool;