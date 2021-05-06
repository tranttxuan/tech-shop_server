const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        title: { type: String, trim: true, required: true, text: true },
        slug: { type: String, unique: true, required: true, lowercase: true, index: true },
        description: { type: String, required: true, trim: true, text: true },
        price: { type: Number, required: true, trim: true },
        category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
        subs: [{ type: Schema.Types.ObjectId, ref: 'Sub' }],
        quantity: { type: Number },
        sold: { type: Number, default: 0 },
        images: [],
        shipping: { type: String, enum: ['Yes', 'No'] },
        color:{type:String, enum:['Black', 'Red', 'Blue', 'White', 'Brown','Silver']},
        brand:{type:String, enum:['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'ASUS', 'HP']},
        ratings:[{star:Number, postedBy:{ type: Schema.Types.ObjectId, ref: 'User' }}]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", productSchema);
