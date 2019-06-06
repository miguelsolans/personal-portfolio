// Managing Content Model
// MongoDB CRUD Operations
const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose');

// Get Data Model Modules
const Content   = require('../../models/Content');

/**
 * CREATE OPERATIONS
 * 1. Add new content
 */
router.post('/new-content', (req, res) => {
    const content = new Content({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        flag: req.body.flag === 'true'
    });

    content.save()
        .then(result => {
            Job.find().exec()
                .then(result => res.render('edit', { education: null, job: null, keyword: null, content: result } ))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
});

/**
 * UPDATE OPERATIONS
 * 1. Method 1
 * 2. Method 2
 */
router.get('/update-content/:id', (req, res) => {

    Content.findOne({ _id: req.params.id })
        .select()
        .exec()
        .then(docs => {
            res.render('editdata', { education: null, job: null, keyword: null, content: docs, widget: null } );
        });
});
router.post('/update-content', (req, res) => {
    const contentId = req.body.contentId;

    console.log(contentId);
    var updateOps = {};
    for(const [key, value] of Object.entries(req.body)){
        updateOps[key] = value;
        console.log(value);
    }

    console.log(updateOps);

    Content.update(
        {_id:contentId},
        {$set:updateOps})
        .exec()
        .then(result => {
            Content.find().exec()
                .then(result => res.render('edit', { education: null, job: null, keyword: null, content: result, widget: null } ))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
});


/**
 * READ OPERATIONS
 * 1. Show available contents
 */
router.get('/edit-content', (req, res) => {
    Content.find()
        .select()
        .exec()
        .then(docs => {
            res.render('edit', { education: null, job: null, keyword: null, content: docs } );
        })
});

/**
 * DELETE OPERATIONS
 * 1. Method 1
 * 2. Method 2
 */
router.get('/delete-content/:id', (req, res) => {
    const contentId = req.params.id;

    Content.deleteOne({ _id: contentId })
        .exec()
        .then(result => {
            Content.find().exec()
                .then(result => res.render('edit', { education: null, job: null, keyword: null, content: result } ))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});



module.exports = router;