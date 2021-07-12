const router = require('express').Router();


router.get('/', (req, res) => {
    Contribution.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'id',
            'contribution_text',
            'user_id',
            'post_id',
            'created_at'
        ]
    })
    .then((dbContData) => res.json(dbContData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;