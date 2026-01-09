import userModel from "../models/userModel.js";


const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        const userData = await userModel.findById(userId);
        let cardData = await userData.cardData;

        if (cardData[itemId]) {
            if (cardData[itemId][size]) {
                cardData[itemId][size] += 1
            } else {
                cardData[itemId][size] = 1
            }
        } else {
            cardData[itemId] = {}
            cardData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, { cardData });
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
        const { userId, itemId, size, quantity } = req.body;

        const userData = await userModel.findById(userId);
        let cardData = await userData.cardData;

        cardData[itemId][size] = quantity;
        await userModel.findByIdAndUpdate(userId, { cardData });
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
        const { userId } = req.body;

        const userData = await userModel.findById(userId);
        let cardData = await userData.cardData;

        res.json({
            success: true,
            cardData
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export { addToCart, updateCart, getUserCart }