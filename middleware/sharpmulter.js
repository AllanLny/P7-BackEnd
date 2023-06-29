const multer = require('multer');
const sharpMulter = require('sharp-multer');

const storage = sharpMulter({
    destination: (req, file, callback) => callback(null, "images"),
    imageOptions: {
        fileFormat: "webp",
        quality: 70,
        useTimestamp: true,
    }
});

const upload = multer({ storage });

module.exports = { upload };
