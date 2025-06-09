import dotenv from 'dotenv'
dotenv.config()
import connectToDatabase from './db.js'
import express from 'express'
import cors from 'cors'
import path from 'path'
import Product from './models/Product.js'
import asyncHandler from 'express-async-handler';
import fs from 'fs'




import multer from 'multer'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '\client/public/images/rezervniDijelovi/vesmasine')
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage })

///////////////
import axios from 'axios'

axios.get('https://api.ipify.org?format=json')
  .then(response => {
    console.log("Your server's public IP is:", response.data.ip);
  })
  .catch(error => {
    console.error("Could not fetch IP:", error);
  });



///////////////

//Routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


connectToDatabase()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// localhost: 5000/api/products

const port = 5000;

const __dirname = path.resolve();

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, "/client/build")))
   
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


app.get('/', (req, res) =>{
    res.send('APi is running...')
})

 app.post('/api/upload', upload.single('image'), asyncHandler(async (req, res) => {
    // console.log(req.body)
    // console.log(req.image)

       const name = req.body.name;
       const brand = req.body.brand;
       const category = req.body.category;
       const price = parseFloat(req.body.price);
       const description = req.body.description;
       const serialNumber = req.body.serialNumber;
       const imageName = req.body.imagename;

       let image1 = "/images/rezervniDijelovi/vesmasine/" + imageName

       console.log("evo slike: " + image1)

       
   
    //    console.log("brand"+brand)
    //    console.log("name"+name)
    //    console.log("price"+price)
    //    console.log("serialNumber"+serialNumber)
    //    console.log("imagename"+imagename)


    
       const newProduct = await Product.create({
            brand,
            name,
            category,
            price,
            serialNumber,
            image1,
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
}))

app.put('/api/upload', upload.single('image'), asyncHandler(async (req, res) => {

    console.log('ovde sam jarane')
 
     const name = req.body.name;
     const brand = req.body.brand;
     const category = req.body.category;
     const price = parseFloat(req.body.price);
     const description = req.body.description;
     const serialNumber = req.body.serialNumber;
     const imageName = req.body.imagename;
     const id = req.body.id;
 
    //  console.log('id:'+id +"\nname:"+name +"\nprice:"+price)
    //  console.log('image: ' +imageName)
 
  

   
 
   
  const product = await Product.findById(id);

  console.log('evo productica: ' + product)
 
  if (product) {

    if(imageName){

      const  filePath  = "\client/public" + product.image1 

        fs.unlink(filePath, (err) => {
          if (err) {
              console.error(`Error removing file: ${err}`);
              return;
          }
          })
      
          console.log(`File ${filePath} has been successfully removed.`);
     }
  	product.name = name;
  	product.price = price;
  	product.description = description;
    product.serialNumber = serialNumber;
    product.image1 ="/images/rezervniDijelovi/vesmasine/" + imageName;

 
   	await product.save();
 
  	const products = await Product.find({});
 
  	res.json(products);
  } else {
  	res.status(404);
  	throw new Error('Product not found.');
  }


  
     
}))

app.listen(port, () => {
    console.log(`Server runs on port ${port}`)
})