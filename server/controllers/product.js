const Product = require("../models/product")

const productContoller = async (req, res) => {
    const { name, imageUrl, price, quantity, category } = req.body

    const newProduct = new Product({ name, imageUrl, price, quantity, category })
    newProduct.save()
    res.status(201).json({ message: "product is sucessfully added" })
}

const getProductById = async (req, res) => {
    const { productId } = req.body

    
    const product = await Product.find({ _id: productId })
    if(!product){
        res.json({message:"product is not found"})
    }

    res.json(product)

}


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