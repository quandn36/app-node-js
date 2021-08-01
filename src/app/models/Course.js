const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// định nghĩa ra thằng CourseModule
const Cource = new Schema({
    name: { type: String },
    descriptions: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Cource', Cource); // 2 tham số là tên model và Schema
