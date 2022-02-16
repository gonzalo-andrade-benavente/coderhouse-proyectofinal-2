const { Router } = require('express');

const { validateRole } = require('../middlewares/validateRole');

const router = Router();

const { getProduct ,
        postProduct } = require('../controllers/product');

router.get('/:id?', getProduct );

router.post('/', [ validateRole ],postProduct );

module.exports = router;
