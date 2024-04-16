const Product = require("../models/product")

const productContoller = async (req, res) => {
    const { name, imageUrl, price, quantity, category,description } = req.body

    const newProduct = new Product({ name, imageUrl, price, quantity, category,description })
    newProduct.save()
    res.status(201).json({ message: "product is sucessfully added" })
}

const getProductById = async (req, res) => {
    const { id } = req.params 
    console.log("id is ",id)

    try {
        const product = await Product.findById(id); // Use findById to directly find by ID

        if (!product) {
            return res.status(404).json({ message: "Product not found" }); // Return early if product not found
        }

        res.json(product);
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ message: "Internal server error" }); // Handle any internal errors
    }
};



const getAllProducts = async (req, res) => {
    const { query } = req.query;

    let products;
    if (query) {

        products = await Product.find({
            $or: [
                { name: { $regex: query, $options: "i" } },

            ]
        });
    } else {

        products = await Product.find({});
    }

    res.json(products);
}




const getAllMenProducts = async (req, res) => {
    const menProducts = await Product.find({ category: 'men' })
    res.status(201).json(menProducts)
}
const getAllWomenProducts = async (req, res) => {
    const womenProducts = await Product.find({ category: 'women' })
    res.status(201).json(womenProducts)
}

module.exports = { productContoller, getAllProducts, getAllMenProducts, getAllWomenProducts, getProductById }