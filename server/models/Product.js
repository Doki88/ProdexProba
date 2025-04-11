import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		image1: {
			type: String,
			required: true,
		},
		image2: {
			type: String,
			required: false,
			 
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
		catalogNumber: {
			type: String,
		},

	},
	{ timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;