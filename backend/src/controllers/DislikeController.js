const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.body;

    const loggedDev = await Dev.findById(devId);
    const likedDev = await Dev.findById(user);

    if (!likedDev) {
      return res.status(400).json({ error: "Dev not exists" });
    }

    loggedDev.dislikes.push(likedDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};
