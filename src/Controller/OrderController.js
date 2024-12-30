
const OrderModel =require('../Model/OrderScema')


//const vegetableModel= require('../Model/VegetableModel')






const OrderData = async (req, res) => {
    try {
        const order = req.body; 

       // Check if the mobile number exists in the request
       if (!order.mobile) {
        return res.status(400).send({ 
            status: false, 
            message: "Mobile number is required to process the order" 
        });
    }

    // Delete previous orders for the given mobile number
    await OrderModel.deleteMany({ mobile: order.mobile });

    // Save the new order
    await OrderModel.create(order);

        res.status(201).send({ status: true, message: "Data fetch successfully",});
    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
};








const getAllOrder=async(req,res)=>{

    try {
        
    
         const data= await OrderModel.find()
         res.status(201).send({ status: true, data: data })


    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}















module.exports={OrderData , getAllOrder}