
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

export const getMessages = (req, res) => {
    res.json(messages);
};

export const postMessages = (req, res) => {
    res.send('still working on the rest');
};

export const getSingleMessages = (req, res) => {
    const {id} = req.params;
    console.log(id);
    const message = messages.find(message => message.id === Number(id));


    res.json(message);
};

