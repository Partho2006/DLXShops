import express from 'express';
import { addProduct, listProduct, removeProduct, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();

productRouter.post('/add', upload.fields([{
    name: 'image1',
    maxCount: 1
},
{
    name: 'image2',
    maxCount: 1
},{
    name: 'image3',
    maxCount: 1
},
{
    name: 'image4',
    maxCount: 1
}]), addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProduct);

export default productRouter;

// pal pal jeena mohal
// mera tere bina
// sare nashe bekar tere akhon ke sibha
// ma nahi jata hu bhar, rehta tera intezaar
// mere akhon meye aa na karke sola sinagar
// me abto hos me ata nahi, 