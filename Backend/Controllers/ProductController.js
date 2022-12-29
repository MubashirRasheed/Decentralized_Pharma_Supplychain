const ProductModel = require("../Models/ProductModel");

// Crud Operations
const GetProduct = async (req, res, next) => {
  try {
    ProductModel.find({ _id: req.params.id }).exec(function (error, data) {
      if (error) {
        return next(error);
      }
      res.json(data);
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const GetAllProducts = async (req, res, next) => {
  console.log(req.body);
  ProductModel.find({}).exec(function (error, data) {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
};

const AddNewProduct = async (req, res, next) => {
  try {
    console.log("Got a request for creating a new Product");
    console.log(req.body);

    ProductModel.create(req.body)
      .then(function (data) {
        console.log(data);
        res.status(200);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  } catch (error) {
    console.log("Error encountered: ", error.message);
    next(error);
  }
};

const UpdateProduct = async (req, res, next) => {
  await ProductModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    quantity: req.body.quantity,
    inStock: req.body.inStock,
    description: req.body.description,
  });
  let newProduct = await ProductModel.findById(req.params.id);
  res.json(newProduct);
};

const DeleteProduct = async (req, res, next) => {
  ProductModel.deleteOne({ _id: req.params.id }).exec(function (error, data) {
    if (error) {
      next(error);
    }
    res.json(data);
  });
};

module.exports = {
  AddNewProduct,
  UpdateProduct,
  GetProduct,
  GetAllProducts,
  DeleteProduct,
};
