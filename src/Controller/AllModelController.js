const RiceModel =require('../Model/RiceModel')
const RotiModel =require('../Model/RotiModel')
const VegetableModel =require('../Model/VegetableModel')
const DallModel =require('../Model/DallModel')








const DeleteAll = async (req, res) => {
    try {
        const { mobile } = req.query;

  if (!mobile) {
    return res.status(400).json({ msg: "Mobile number is required" });
  }

      await RiceModel.deleteMany({ mobile });
      await RotiModel.deleteMany({ mobile });
      await DallModel.deleteMany({ mobile });
      await VegetableModel.deleteMany({ mobile });

    // Save the new order
    await OrderModel.create(order);

        res.status(201).send({ status: true, message: "Data fetch successfully",});
    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
};








module.exports={DeleteAll}