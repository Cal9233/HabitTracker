const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HabitSchema = new Schema(
    {
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        action: {
            type: String
        },
        start: {
            type: Date
        },
        deadline: {
            type: Date
        },
        completed: {
            type: Boolean,
            default: false,
        }
    }
);

// HabitSchema.methods.toJson = function(){

// }

const Habits = mongoose.model('habits', HabitSchema);

module.exports = Habits;