const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

// định nghĩa ra thằng CourseModule
const Cource = new Schema({
    name: { type: String },
    descriptions: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

mongoose.plugin(slug); // thêm plugin slug name 
Cource.plugin(mongooseDelete, { deletedAt : true, overrideMethods: true });// thêm plugin soft delete cho models

module.exports = mongoose.model('Cource', Cource); // 2 tham số là tên model và Schema
