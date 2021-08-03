const mongoose = require('mongoose'); // thêm thư viện mongoose
const slug = require('mongoose-slug-generator'); // thêm thư viện generate slug
const mongooseDelete = require('mongoose-delete'); // thêm thư viện soft delete

const Schema = mongoose.Schema; // khởi tạo 1 schema mới từ thư viện mongoose

const Cource = new Schema({
    name: { type: String },
    descriptions: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true, // đặt giá trị timestamps mặc định
});

mongoose.plugin(slug); // thêm tự động generate slug cho bản ghi
Cource.plugin(mongooseDelete, { deletedAt : true, overrideMethods: true }); // thêm plugin soft delete cho tất cả các phương thức trong model

module.exports = mongoose.model('Cource', Cource); // export model
