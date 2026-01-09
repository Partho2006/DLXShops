import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
    try {
        const userId = req.userId; 
        const { itemId, size } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({
            success: true,
            message: "Added to Cart!!"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

const updateCart = async (req, res) => {
    try {
        const userId = req.userId;
        const { itemId, size, quantity } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        if (!cartData[itemId]) cartData[itemId] = {};
        cartData[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({
            success: true,
            message: "Updated Cart!!"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

const getUserCart = async (req, res) => {
    try {
        const userId = req.userId;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        res.json({
            success: true,
            cartData
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export { addToCart, updateCart, getUserCart }
