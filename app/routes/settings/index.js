// Managing Keywords Model
// MongoDB CRUD Operations
const express   = require('express');
const router    = express.Router();
const async     = require('async');
const mongoose  = require('mongoose');

// Get Data Model Modules
const Tags       = require('../../models/Keywords');
const Widgets   = require('../../models/Widgets');

/**
 * CREATE OPERATIONS
 * 1. Create new tag
 * 2. Create new widget
 */
router.post('/new-tag', (req, res) => {

    var jsonTags = JSON.parse(req.body.tag);

    req.body.tag = "";

    for(var i = 0; i < jsonTags.length ; i++) {
        req.body.tag += jsonTags[i].value;
        if(i === (jsonTags.length - 1)) break;
        req.body.tag += "; ";
    }

    const tag = new Tags({
        _id: new mongoose.Types.ObjectId(),
        tag: req.body.tag
    });

    tag.save()
        .then(result => {
            Tags.find().select().exec()
                .then(result => res.redirect("/admin/settings"));
                //.then(result => res.render('settings', { keyword: result }));

        })
        .catch(err => console.log(err))
});

router.post('/new-widget', (req, res) => {
    const widget = new Widgets({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content
    });

    widget.save()
        .then(result => {
            Tags.find().select().exec()
                .then(result => res.redirect("/admin/settings"));
        })
});


/**
 * READ OPERATIONS
 * 1. Display data in table on settings page
 */
router.get('/settings', (req, res) => {

    var tagList = Tags.find({});
    var widgetList  = Widgets.find({});

    var resources = {
        tags:    tagList.exec.bind(tagList),
        widgets: widgetList.exec.bind(widgetList)
    };

    async.parallel(resources, function(error, result) {
        if (error) {
            res.status(500).send(error);
            return;
        }

        res.render('settings', {
            keyword: result.tags,
            widgets: result.widgets
        })
    })
});

/**
 * UPDATE OPERATIONS
 * 1. Display form to edit
 * 2. Update Tag from FORM values
 */
router.get('/edit-tag/:id', (req, res) => {
    Tags.findOne({ _id: req.params.id })
        .select()
        .exec()
        .then(docs => {
            console.log(docs);
            res.render('editdata', { education: null, job: null, keyword: docs, widget: null });
        })
});
router.post('/update-tag', (req, res) => {
    const tagId = req.body.tagId;

    var jsonTags = JSON.parse(req.body.tag);

    req.body.tag = "";

    for(var i = 0; i < jsonTags.length ; i++) {
        req.body.tag += jsonTags[i].value;
        if(i === (jsonTags.length - 1)) break;
        req.body.tag += "; ";
    }

    var updateOps = {};
    for(const [key, value] of Object.entries(req.body)){
        updateOps[key] = value;
    }
    console.log(updateOps);

    Tags.update(
        { _id: tagId },
        { $set: updateOps })
        .exec()
        .then(result => {
            Tags.find().exec()
                .then(result => res.redirect("/admin/settings"));
                // .then(result => res.render('settings', { keyword:result } ));
        })
        .catch(err => console.log(err))
});

router.get('/edit-widget/:id', (req, res) => {
    Widgets.findOne({ _id: req.params.id })
        .select()
        .exec()
        .then(docs => {
            res.render('editdata', { education: null, job: null, keyword: undefined, widget: docs });
        })
});
router.post('/update-widget', (req, res) => {
    const widgetId = req.body.widgetId;


    var updateOps = {};
    for(const [key, value] of Object.entries(req.body)){
        updateOps[key] = value;
    }

    Widgets.update(
        { _id: widgetId },
        { $set: updateOps })
        .exec()
        .then(result => {
            Tags.find().exec()
                .then(result => res.redirect("/admin/settings"));
        })
        .catch(err => console.log(err))
});


/**
 * DELETE OPERATIONS
 * 1. Delete certain tag
 * 2. Delete certain widget
 */
router.get('/delete-tag/:id', (req, res) => {
    const tagId = req.params.id;

    Tags.deleteOne({ _id: tagId })
        .exec()
        .then(result => {
            Tags.find().exec()
                .then(result => res.redirect("/admin/settings"))
                // .then(result => res.render('settings', { keyword: result } ))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});
router.get('/delete-widget/:id', (req, res) => {
    const widgetId = req.params.id;

    Widgets.deleteOne({ _id: widgetId })
        .exec()
        .then(result => {
            Widgets.find().exec()
                .then(result => res.redirect("/admin/settings"))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});



module.exports = router;