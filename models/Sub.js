const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema(
    {
        name: { type: String, trim: true, required: 'Name is required' },
        slug: { type: String, unique: true, lowercase: true, index: true },
        parent: { type: Schema.Types.ObjectId, ref: 'Category', required:true }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Sub", subSchema);
