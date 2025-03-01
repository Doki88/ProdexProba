import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		images: {
			type: Array,
			required: true,
			default: [],
		},
		brand: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
        subtitle: {
            type: String
        },
        description: {
            type: String,
        },
		stock: {
			type: Number,
			//required: true,
		},
		productIsNew: {
			type: Boolean,
			//required: true,
		},
		serialNumber: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;