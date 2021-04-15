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
]

export const getUsers = (req, res) => {
    res.json(users);
};

export const postUsers = (req, res) => {
    res.send('postUsers');
};

export const getSingleUser = (req, res) => {
    const {id} = req.params;
    console.log(id);
    const user = users.find(user => user.id === Number(id));


    res.json(user);
};

export const getMessageByUserId = (req, res) => {
    res.send('getMessageByUserId');
};