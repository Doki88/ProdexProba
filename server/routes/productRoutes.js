import express from 'express'
import Product from '../models/Product.js'

const productRoutes = express.Router()

const getProducts =  async (req,res) => {
     //const products = await Product.find({})

    // res.json({
    //     products,
    //     pagination: {},
    // })
    const page = parseInt(req.params.page); // 1, 2 or 3
	const perPage = parseInt(req.params.perPage); // 10
    //const proba = req.params[0];
    const sort = req.params.sort;
    const order = req.params.order;
    const search = req.params.search;
    const brand = req.params.brand;
    const category = req.params.category;

    //console.log('evo i probe: ' + proba)
    //console.log("brend: " + brand + " kategorija: " + category)
    

	let products = await Product.find({});

    console.log('evo producta:')
    console.log(products)

    if(brand){
        console.log('usao sam u brand')
        products = products.filter((product) => product.brand == brand);
    }

    if(category){
        console.log('usao sam u kategoriju')
        products = products.filter((product) => product.category == category);
    }

  
    
 
   
    if(sort && order){
        products = _.orderBy(products, ['name'], ['asc']);  //verovatno treba da se promeni u sort i order da po njima sortira
    }

    if(search){
       
        // products =products.filter(function (el) {
        //          return el.name.includes(search)  
        //     }
        // );

        let result = [];
        products.forEach(product => {
            if (product.name.toLowerCase().includes(search)) {
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
productRoutes.route('/:page/:perPage/:sort/:order/:search').get(getProducts);
productRoutes.route('/:page/:perPage/:sort/:order').get(getProducts);
productRoutes.route('/:brand/:category').get(getProducts);
productRoutes.route('/').get(getProducts);

export default productRoutes