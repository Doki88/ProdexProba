import express from 'express'
import Product from '../models/Product.js'
import asyncHandler from 'express-async-handler';
import fs from 'fs'


import multer from 'multer'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '\client/public/images')
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage })
 
 
const productRoutes = express.Router()

const getProducts =  async (req,res) => {

    console.log('ovdje sam')
   
    const page = parseInt(req.params.page); // 1, 2 or 3
	const perPage = parseInt(req.params.perPage); // 10
    const sort = req.params.sort;
    const order = req.params.order;
    // const categoryAndBrand = req.params.categoryAndBrand;
    const brand = req.params.brand;
    const category = req.params.category;
    const search = req.params.search;

    // console.log('category:'+category)
    console.log('search:'+search)
 

	let products = await Product.find({});

    if(brand && brand!='all'){
            products = products.filter((product) => product.brand == brand);
    }

    //napravicu da postoji kategorija "all" koja ce biti defaultna
    //i onda cu ako je ta kategorija preskakati i necu filtrirati
    //time sam postigao da ce mi category biti obvezno polje kao i brand
    //i posle samo dodam search
    if(category && category!='all'){
            products = products.filter((product) => product.category == category);
         
    }
    // if(categoryAndBrand && categoryAndBrand != 'proba'){
    //     let brand = categoryAndBrand.split("-")[0]
    //     let category = categoryAndBrand.split("-")[1]
       
    //     if(brand){
    //         products = products.filter((product) => product.brand == brand);
    //     }
    
    //     if(category){
    //         products = products.filter((product) => product.category == category);
    //     }
    // }
    
    // if(sort && order){
    //     products = _.orderBy(products, ['name'], ['asc']);  //verovatno treba da se promeni u sort i order da po njima sortira
    // }

    if(search){
       
        // products =products.filter(function (el) {
        //          return el.name.includes(search)  
        //     }
        // );
        let result = [];
        products.forEach(product => {
            if (product.name.toLowerCase().includes(search.toLowerCase())) {
                result.push(product);
            }
        });
        products.forEach(product => {
            if (product.serialNumber.toLowerCase().startsWith(search.toLowerCase())) {
                result.push(product);
            }
        });

        products = result;

    }

    // const filteredProducts = _.orderBy(products, ['name'], ['asc']);

	if (page && perPage) {
		const totalPages = Math.ceil(products.length / perPage);
		const startIndex = (page - 1) * perPage;
		const endIndex = startIndex + perPage;
		const paginatedProducts = products.slice(startIndex, endIndex);
		res.json({ products: paginatedProducts, pagination: { currentPage: page, totalPages } });
	} else {
		res.json({ products, pagination: {} });
	}
}

const getProduct = async (req, res) => {

 	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
};

 

const createNewProduct = asyncHandler(async (req, res) => {
    const name = req.body.product.name;
    const brand = req.body.product.brand;
    const category = req.body.product.category;
    const price = parseInt(req.body.product.price);
    const description = req.body.product.description;
    const serialNumber = req.body.product.serialNumber;
    const file = req.body.product.file;

 
 
    const newProduct = await Product.create({
         brand,
         name,
         category,
         price,
         serialNumber,
         // images: images,
         description,
     });
     await newProduct.save();
 
     const products = await Product.find({});
 
     if (newProduct) {
         res.json(products);
     } else {
         res.status(404);
         throw new Error('Product could not be uploaded.');
     }
 });

 const updateProduct = asyncHandler(async (req, res) => {
	//const { brand, name, category, stock, price, id, productIsNew, description } = req.body;

    // const name = req.body.product.name;
    // const brand = req.body.product.brand;
    // const category = req.body.product.category;
    // const price = parseFloat(req.body.product.price);
    // const description = req.body.product.description;
    // const id = req.body.product.id;

    const name = req.body.name;
    const brand = req.body.brand;
    const category = req.body.category;
    const price = parseFloat(req.body.price);
    const description = req.body.description;
    const serialNumber = req.body.serialNumber;
    const imageName = req.body.imagename;
    const id = req.body.id;

    console.log('id:'+id +"\nname:"+name+"\nbrand:"+brand+"\ncategory:"+ category + "\ndescription:"+description+"\nserialNumber:"+serialNumber)

    console.log('ovde sam')

    const  filePath  = "\client/public/images/rezervniDijelovi/vesmasine/proba.jpg" 

        fs.unlink(filePath, (err) => {
    if (err) {
        console.error(`Error removing file: ${err}`);
        return;
    }
    })

    console.log(`File ${filePath} has been successfully removed.`);
	// const product = await Product.findById(id);

	// if (product) {
	// 	product.name = name;
	// 	product.price = price;
	// 	product.description = description;
	// 	product.brand = brand;
	// 	product.category = category;
	 

	//  	await product.save();

	// 	const products = await Product.find({});

	// 	res.json(products);
	// } else {
	// 	res.status(404);
	// 	throw new Error('Product not found.');
	// }
});

 const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findByIdAndDelete(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

// productRoutes.route('/:page/:perPage/:categoryAndBrand/:search').get(getProducts);
// productRoutes.route('/:page/:perPage/:categoryAndBrand').get(getProducts);
productRoutes.route('/:page/:perPage/:brand/:category/:search').get(getProducts);

productRoutes.route('/:page/:perPage/:brand/:category').get(getProducts);
// productRoutes.route('/:page/:perPage/:brand').get(getProducts);
// productRoutes.route('/:categoryAndBrand').get(getProducts);
//productRoutes.route('/:search').get(getProducts);
// productRoutes.route('/:categoryAndBrand/:search').get(getProducts);
productRoutes.route('/').get(getProducts);
productRoutes.route('/:page/:perPage').get(getProducts);

productRoutes.route('/:id').get(getProduct);
productRoutes.route('/').post(createNewProduct);
productRoutes.route('/:id').delete(deleteProduct);
productRoutes.route('/').put(updateProduct);


export default productRoutes