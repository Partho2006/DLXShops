import userModel from "../models/userModel";


const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        const userData = await userModel.findById(userId);
        const cardData = await userData.cardData;

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

}

const getUserCart = async (req, res) => {

}

export { addToCart, updateCart, getUserCart }