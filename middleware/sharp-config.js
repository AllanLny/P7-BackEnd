const sharp = require('sharp');
const fs = require('fs')

const sharpImage = async (req, res, next) => {
    const formattedName = req.file.originalname.split(' ').join('_') + Date.now() + '.webp';
    try {
        sharp(req.file.path)
            .webp({ quality: 60 })
            .toFile('./images/' + formattedName);

        // const MIME_TYPES = {
        //     'image/jpg': 'jpg',
        //     'image/jpeg': 'jpg',
        //     'image/png': 'png'
        // };
        // const extension = MIME_TYPES[req.file.mimetype];

        // fs.unlink('./images/' + req.file.originalname.split(' ').join('_') + Date.now() + '.' + extension, (err) => {
        //     if (err) {
        //         throw err;
        //     }
        //     console.log("Supprimé");
        // });
        next();

    } catch (error) {
        console.log(error);
    }
}

module.exports = sharpImage
