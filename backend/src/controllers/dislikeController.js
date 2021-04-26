const Dev = require('../model/dev');

module.exports = {
    async store(request, response) {
        const {user} = req.headers;
        const { devId } = req.params; 

        const loggedDev = await Dev.findById(user);
        const targedDev = await Dev.findById(devId);

        if (!targedDev) {
            return res.status(400).json({ error: 'Dev not exists'});
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
}