const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const Post = require('./app/models/Post');


routes.get('/posts', async(req, res) => {    

    try {
        const posts = await Post.find();
        return res.send({ posts });
    } catch (err) {
        return res.status(400).send({ error: 'Error on loading posts' });
    }
    
});

routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {

    try {

        const { originalname: name, size, key, path, location: url = '' } = req.file;

        const post = await Post.create({
            name,
            size,
            key,
            url,
        });

        return res.send({ post });

    } catch (err) {
        return res.status(400).send({ error: 'Error on upload file' });
    }
    
});

routes.delete('/posts/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        await post.remove();

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error on deleting post' });
    }    
});

module.exports = routes;