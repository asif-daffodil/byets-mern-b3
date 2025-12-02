const userProfile = (req, res) => {
    const userProfile = req.user;
    res.status(200).json(userProfile);
}

module.exports = { userProfile };