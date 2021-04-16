import pool from '../db/pg.js';

const users = [
    {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
    },
    {
        id: 2,
        firstname: 'Max',
        lastname: 'Mustermann',
    },
    {
        id: 3,
        firstname: 'Maria',
        lastname: 'Musterfrau',
    },
    {
        id: 4,
        firstname: 'James',
        lastname: 'Bond',
    },
]

export const getUsers = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users;');
        res.json(rows);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

export const postUsers = (req, res) => {
    res.send('postUsers');
};

export const getSingleUser = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        //const user = users.find(user => user.id === Number(id));
        const {rows} = await pool.query('SELECT * FROM users WHERE userID=$1', [id])

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

export const getMessageByUserId = async (req, res) => {
    //res.send('getMessageByUserId');
    try {
        const {id} = req.params;
        console.log(id);
        //const user = users.find(user => user.id === Number(id));
        const {rows} = await pool.query('SELECT * FROM messages WHERE userID=$1', [id])

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};