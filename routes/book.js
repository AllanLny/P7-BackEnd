const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config')
// const sharpImage = require('../middleware/sharp-config')
const { upload } = require('../middleware/sharpmulter');
const bookCtrl = require('../controllers/book');


router.get('/', bookCtrl.getBooks);
router.post('/', auth, upload.single("image"), bookCtrl.createBook);
router.get('/bestrating', bookCtrl.getBestRating);
router.get('/:id', bookCtrl.getBook);
router.put('/:id', auth, upload.single("image"), bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);
router.post('/:id/rating', auth, bookCtrl.rateBook);


module.exports = router;