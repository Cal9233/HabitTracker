const express = require('express');
//const router =  express.Router();
const router = require('express').Router();
const Habits = require('../database/models/habits');

router.get('/habits', (req, res, next) => {
    console.log('get habit: ');
    Habits.find({}, 'action')
    .then(data => res.json(data))
    .catch(next);
})

router.post('/habits', async (req, res, next) => {
    if(req.body){
        await Habits.create({
            action: req.body.action,
            start: req.body.start,
            deadline: req.body.deadline
        })
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