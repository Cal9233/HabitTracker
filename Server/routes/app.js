//user: {UserID, UserEmail, UserPassword}
//habits: {UserID, HabitID, LastVisitedDate, VisitsPerWeek, VisitsPerMonth}
//events: {UserID, EventID, EventsCreated, EventsCompleted }
//use email to track user/user data
const express = require('express');
const router =  express.Router();


//Get HomePage

router.get('/', (req, res) => {
    res.render('app', {title: "Express"})
});



module.exports = router;