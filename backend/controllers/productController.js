

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subcategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        console.log(name, description, price, category, subcategory, sizes, bestseller);
        console.log(image1, image2, image3, image4);

        return res.json({})
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