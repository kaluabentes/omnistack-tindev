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

    if (likedDev.likes.includes(loggedDev._id)) {
      console.log("DEU MATCH");
    }

    loggedDev.likes.push(likedDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};
