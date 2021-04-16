import pool from '../db/pg.js'

const messages = [
    {
        id: 1,
        userId: 1,
        text: 'abc',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Old_city_hall_of_Leipzig_%2820%29.jpg/1200px-Old_city_hall_of_Leipzig_%2820%29.jpg'
    },
    {
        id: 2,
        userId: 2,
        text: 'abc',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Old_city_hall_of_Leipzig_%2820%29.jpg/1200px-Old_city_hall_of_Leipzig_%2820%29.jpg'
    },
    {
        id: 3,
        userId: 3,
        text: 'abc',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Old_city_hall_of_Leipzig_%2820%29.jpg/1200px-Old_city_hall_of_Leipzig_%2820%29.jpg'
    },
    {
        id: 4,
        userId: 4,
        text: 'abc',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Old_city_hall_of_Leipzig_%2820%29.jpg/1200px-Old_city_hall_of_Leipzig_%2820%29.jpg'
    },
    {
        id: 5,
        userId: 1,
        text: 'abc',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Old_city_hall_of_Leipzig_%2820%29.jpg/1200px-Old_city_hall_of_Leipzig_%2820%29.jpg'
    }
]

export const getMessages = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM messages;');
        res.json(rows);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

export const postMessages = (req, res) => {
    res.send('still working on the rest');
};

export const getSingleMessages = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        //const user = users.find(user => user.id === Number(id));
        const {rows} = await pool.query('SELECT * FROM messages WHERE messageID=$1', [id])

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

