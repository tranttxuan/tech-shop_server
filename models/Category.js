const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        name: { type: String, trim: true, minlength: 3, maxlength: 32, required: 'Name is required' },
        slug: { type: String, unique: true, lowercase: true, index: true }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Category", categorySchema);
