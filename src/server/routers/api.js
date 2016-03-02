import { Router } from 'express';
import Post from '../data/post';

var apiRouter = Router();

apiRouter.get('/posts/:id', (req, res) => {
    const id = req.params.id;

    Post.findOne({ id: id }, function(err, post) {
        if (err) return next(err);
        if (!post) {
          return res.status(404);
        }

        res.send(post);
    });  
})

apiRouter.get('/posts', (req, res) => {
    Post.find({})
    .exec((err, data) => {
        if (err) return next(err);
        else res.send(data);
    })
})

apiRouter.post('/posts', (req, res) => {
    // console.log(req.body);
    
    console.log(req.body);
    var newPost = new Post(req.body);
    newPost.save(err => {
        if (err) return next(err);
        res.send({ message: 'saved!' });
    });
    // res.sendStatus(200);
})

export default apiRouter;