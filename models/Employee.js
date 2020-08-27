const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    is_active: {
        type: Boolean,
        default: false
    }},{
        timestamps: true
});

module.exports = mongoose.model("Employee", EmployeeSchema);