const express = require('express');
const router =  express.Router();
const Habits = require('../database/models/habits');

router.get('/habits', (req, res, next) => {
    Habits.find({}, 'action')
    .then(data => res.json(data))
    .catch(next);
})

router.post('/habits', (req, res, next) => {
    if(req.body.action){
        Habits.create(req.body)
        .then(data => res.json(data))
        .catch(next);
    } else {
        res.json({
            error: "Input field is empty"
        })
    }
});

router.delete('/habits/:id',(req, res, next) => {
    Habits.findByIdAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;