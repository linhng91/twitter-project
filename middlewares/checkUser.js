import pool from '../db/pg.js';

const checkUser = async (req, res, next) => {
    const {id} = req.params;
    const {rowCount} = await pool.query('SELECT * FROM users WHERE userID=$1', [id]);
    if(!rowCount) return res.status(404).json({message: `User with ID of ${id} does not exist`});
    next();
};

export default checkUser;