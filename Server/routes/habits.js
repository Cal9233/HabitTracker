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

    try{
        if(req.body){
            await Habits.create({
                action: req.body.action,
                monday: req.body.monday,
                tuesday: req.body.tuesday,
                wednesday: req.body.wednesday,
                thursday: req.body.thursday,
                friday: req.body.friday,
                saturday: req.body.saturday,
                sunday: req.body.sunday,
            })
            .then(habit => {
                res.status(200).json({
                    message: "Habit Created",
                    habit
                })
            })
            .catch(e => console.log("error: ", e));
            
        } else {
            res.json({
                error: "Input field is empty"
            })
        }
    } catch (e){
        res.status(401).json({
            message: "Error creating a Habit",
            error: e.message
        });
    }
});

router.delete('/habits/:id',(req, res, next) => {
    Habits.findByIdAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next);
});

router.get('habits/list', (req, res, next) => {
    try{
        Habits.find({}, function(err, habits){
            if(err){
                return console.log("Error: ", err);
            } else {
                let habitMap = {};

                habits.forEach(habit => {
                    habitMap[habit.ownerId] = habit;
                });
                res.send(habitMap);
            }
            
        })
    } catch(e){
        res.status(401).json({
            message: "Error trying to get Habit List",
            error: e.message
        })
    }
});

module.exports = router;