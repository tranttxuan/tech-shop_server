const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
    {
        products: [
            {
                product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
                count: Number,
                color: String,
                price: Number
            }
        ],
        cartTotal: Number,
        totalAfterDiscount: Number,
        orderedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Cart", cartSchema);
