const { Router } = require('express');

const { validateRole } = require('../middlewares/validateRole');
const { validateId } = require('../middlewares/validateId');

const router = Router();

const { deleteProduct ,
        getProduct ,
        postProduct ,
        putProduct } = require('../controllers/product');

router.get('/:id?', getProduct );

router.post('/', [ validateRole ], postProduct );

router.delete('/:id', [ validateId, validateRole ], deleteProduct );

router.put('/:id?', [ validateId, validateRole ], putProduct );

module.exports = router;
