import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import 'dotenv/config.js';
import usersRouter from './routes/users.js';
import messagesRouter from './routes/messages.js';
import randomRouter from './routes/random.js'


const port = process.env.PORT || 3000; 
const app = express();

app.use(cors({origin: '*'}));
app.use(morgan('dev'));

app.use('/users', usersRouter);
app.use('/messages', messagesRouter);
app.use('/me', randomRouter);

app.listen(port, () => console.log(`Application running in Port ${port}`));
