const router = require('express').Router();
const { blogPost } = require('../../models/blogPost');


router.get('/', (req, res) => {
    blogPost.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'id',
            'blogPost_text',
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


router.post('/', (req, res) => {
    blogPost.creat({
        blogPost_text: req.body.blogPost_text,
        post_id: req.body.post_id,
        user_id: req.body.user_id
    })
    .then((dbContData) => res.json(dbContData))
    .catch(err=> {
        console.log(err);
        res.status(400).json(err);
    });
})

router.delete('/:id', (req, res) => {
    blogPost.destroy({
        where: {
            id: req.params.id,
        }
    });
});


module.exports = router;