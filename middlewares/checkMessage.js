import pool from '../db/pg.js';

const checkMessage = async (req, res, next) => {
    const {id} = req.params;
    const {rowCount} = await pool.query('SELECT * FROM messages WHERE messageID=$1', [id]);
    if(!rowCount) return res.status(404).json({message: `Message with ID of ${id} does not exist`});
    next();
};

export default checkMessage;