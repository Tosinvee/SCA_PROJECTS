const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const validateRequest = require('../middlewares/createPostValidator');

router.get('/', postsController.index);

router.get('/:post', postsController.show)

router.post('/', validateRequest, postsController.store);
router.put('/update', postsController.update)
router.delete('/delete', postsController.destroy) 

module.exports = router;
