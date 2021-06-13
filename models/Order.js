const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        products: [
            {
                product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
                count: Number,
                color: String,
                price: Number
            }
        ],
        paymentIntent: {},
        orderStatus: {
            type: String,
            enum: ['Not processed', 'Processing', 'Dispatched', 'Cancelled', 'Completed'],
            default: 'Not processed'
        },
        orderedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);
