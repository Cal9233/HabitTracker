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
        monday: {
            type: Boolean,
            default: false,
        },
        tuesday: {
            type: Boolean,
            default: false,
        },
        wednesday: {
            type: Boolean,
            default: false,
        },
        thursday: {
            type: Boolean,
            default: false,
        },
        friday: {
            type: Boolean,
            default: false,
        },
        saturday: {
            type: Boolean,
            default: false,
        },
        sunday: {
            type: Boolean,
            default: false,
        }
    }
);

// HabitSchema.methods.toJson = function(){

// }

const Habits = mongoose.model('habits', HabitSchema);

module.exports = Habits;