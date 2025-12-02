const upload = require("../middleware/imageUpload");

const uploadImage = (req, res) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: 'Image uploaded successfully' });
    });
};

module.exports = {
    uploadImage
};