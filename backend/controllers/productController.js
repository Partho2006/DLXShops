import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        if (!name || !price || !category) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
        console.log(images);

        let imageUrls = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,
                    { resource_type: 'image' });

                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            price: Number(price),
            image: imageUrls,
            category, 
            subCategory,
            sizes: JSON.parse(sizes),  
            bestseller: bestseller === 'true' ? true : false,          
            date: Date.now()
        }

        console.log(productData);
        const product = new productModel(productData);
        await product.save();

        res.json({
            success: true,
            message: "Product uploaded."
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const listProduct = async (req, res) => {
}

const removeProduct = async (req, res) => {
}

const singleProduct = async (req, res) => {
}

export { addProduct, listProduct, removeProduct, singleProduct }