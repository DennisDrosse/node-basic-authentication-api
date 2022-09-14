// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' },
{ id: 2, username: 'test2', password: 'test123', firstName: 'Dennis', lastName: 'Droße' }];

module.exports = {
    authenticate,
    getAll,
    getUserByID
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getUserByID({ id }) {
    const userToReturn = users.find(user => user.id  === Number(id));
    return userToReturn;
}

