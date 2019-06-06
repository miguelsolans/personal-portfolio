const express   = require('express');
const router    = express.Router();
const async     = require('async');
const mongoose  = require('mongoose');


// Get Data Model Modules
const Education = require('../models/Education');
const Job       = require('../models/Jobs');
const Users     = require('../models/Users');
const Keywords  = require('../models/Keywords');
const Widgets   = require('../models/Widgets');
const Content   = require('../models/Content');

// Home
router.get('/', function(req, res) {
    var educationList = Education.find({}),
        jobsList      = Job.find({}),
        tagsList      = Keywords.find({}),
        widgetList    = Widgets.find({}),
        contentList   = Content.find({});

    var resources = {
        education:  educationList.exec.bind(educationList),
        job:        jobsList.exec.bind(jobsList),
        tags:       tagsList.exec.bind(tagsList),
        widgets:    widgetList.exec.bind(widgetList),
        content:    contentList.exec.bind(contentList)
    };

    async.parallel(resources, function(error, result) {
        if (error) {
            res.status(500).send(error);
            return;
        }

        var tagTxt = "";

        if(result.tags.length > 0) {
            var tags = [];
            // Remove white spaces and split by ;
            for(var i in result.tags) {
                result.tags[i].tag = result.tags[i].tag.replace(/\s/g, '');
                tags.push(result.tags[i].tag.split(';'));
            }
            // Handy for handling white spaces in API
            for(var i in tags)
                tags[i] = tags[i].join('+');

            tagTxt = tags.join(",");
        }

        console.log(result.widgets);

        res.render('index', {
            education: result.education,
            job: result.job,
            tags: tagTxt,
            widgets: result.widgets,
            contents: result.content
        });
    })
});

// Admin
router.get('/login', function(req, res) {
    res.render('login');
});
router.post('/admin', (req, res) => {

    Users.findOne()
        .select({username: req.body.username, password: req.body.password})
        .exec()
        .then(docs => {
            if(req.body.username === docs.username && req.body.password === docs.password) {
                res.render('admin');
            }
            else res.send("<h2>Couldn't Login</h2><p>Perhaps username doesn't have permission or the input password is wrong!</p>")
        })
});

// Add New Data
router.get('/newdata', function (req, res) {
    res.render('newdata');
});



// Module Export: router
module.exports = router;