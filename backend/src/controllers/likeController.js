const Dev = require('../model/dev');

module.exports = {
    async store(request, response) {
        const {user} = request.headers;
        const { devId } = request.params; 

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return response.status(400).json({ error: 'Dev not exists'});
        }

        if(targetDev.likes.includes(loggedDev._id)) {
            console.log('Deu match');
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return response.json(loggedDev);
    }
}