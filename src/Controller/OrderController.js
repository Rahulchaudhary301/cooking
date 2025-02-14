
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
        
         const data= await OrderModel.find().sort({ createdAt: -1 });
         res.status(201).send({ status: true, data: data })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}



const getOrderByNumber=async(req,res)=>{

    try {

        const {mobile} = req.body

       // console.log(mobile)
        
         const data= await OrderModel.find({mobile:mobile})

         res.status(201).send({ status: true, data: data })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}




const requestForUpdateByNumber=async(req,res)=>{

    try {

        const { mobile } = req.body;

       // Find and update the document with the provided mobile number
       const updatedData = await OrderModel.findOneAndUpdate(
        { mobile: mobile },              // Filter by mobile number
        { $set: { clientRequest: true } }, // Update the clientRequest key to true
        { new: true }                    // Return the updated document
    );

        if (!updatedData) {
            return res.status(404).send({ status: false, msg: "Data not found for the given mobile number" });
        }

         res.status(201).send({ status: true, data: updatedData })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}








const permissionGrant = async (req, res) => {
    try {
        const { mobile } = req.body;

        // Update the document with both fields in one $set object
        const updatedData = await OrderModel.findOneAndUpdate(
            { mobile: mobile },                // Filter by mobile number
            { $set: { clientRequest: false, requsetGrant: true } }, // Update both fields
            { new: true }                       // Return the updated document
        );

       // console.log("Permission granted");

        if (!updatedData) {
            return res.status(404).send({ status: false, msg: "Data not found for the given mobile number" });
        }

        res.status(200).send({ status: true, data: updatedData });
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message });
    }
};



















const CheckPermission=async(req,res)=>{

    try {

        const { mobile } = req.body;
        
        // Find and update the document with the provided mobile number
        const updatedData = await OrderModel.find({ mobile: mobile });

         res.status(201).send({ status: true, data: updatedData })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}
















const requestForOderPreairedStatus=async(req,res)=>{

    try {

        const { mobile } = req.body;

      //  console.log('rahulllllllllllllllllll' , mobile)

       const updatedData = await OrderModel.findOneAndUpdate(
        { mobile: mobile },              
        { $set: { orderPrepaired: true , orderItemList: true} }, 
       
        { new: true }                   
    );

        if (!updatedData) {
            return res.status(404).send({ status: false, msg: "Data not found for the given mobile number" });
        }

         res.status(201).send({ status: true, data: updatedData })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}








const CancelOrderSumited=async(req,res)=>{

    try {

        const { mobile } = req.body;

     

       const updatedData = await OrderModel.findOneAndUpdate(
        { mobile: mobile },              
        { $set: { orderSumbit: false } }, 
       
        { new: true }                   
    );

        if (!updatedData) {
            return res.status(404).send({ status: false, msg: "Data not found for the given mobile number" });
        }

         res.status(201).send({ status: true, data: updatedData })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}










const PermissionForCancelOrber =async(req,res)=>{

    try {

        const { mobile } = req.body;

     

       const updatedData = await OrderModel.findOneAndUpdate(
        { mobile: mobile },              
        { $set: { CancelOrderPermision: true } }, 
       
        { new: true }                   
    );

        if (!updatedData) {
            return res.status(404).send({ status: false, msg: "Data not found for the given mobile number" });
        }

         res.status(201).send({ status: true, data: updatedData })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}











const PermissionNewOrder =async(req,res)=>{

    try {

        const { mobile } = req.body;

     

       const updatedData = await OrderModel.findOneAndUpdate(
        { mobile: mobile },              
        { $set: { workFinished: true } }, 
       
        { new: true }                   
    );

        if (!updatedData) {
            return res.status(404).send({ status: false, msg: "Data not found for the given mobile number" });
        }

         res.status(201).send({ status: true, data: updatedData })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}




























const NotAcceptOrderRequest =async(req,res)=>{

    try {

        const { mobile } = req.body;

       const updatedData = await OrderModel.findOneAndUpdate(

        { mobile: mobile },              
        { $set: { AcceptOrder: true , requsetGrant: true} }, 
       
        { new: true }                   
    );

        if (!updatedData) {
            return res.status(404).send({ status: false, msg: "Data not found for the given mobile number" });
        }

         res.status(201).send({ status: true, data: updatedData })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}











const requestForOderPreairedStatusFalse=async(req,res)=>{

    try {

        const { mobile } = req.body;
        
       const updatedData = await OrderModel.findOneAndUpdate(
        { mobile: mobile },              // Filter by mobile number
        { $set: { orderPrepaired: false } }, // Update the clientRequest key to true
        { new: true }                    // Return the updated document
    );

        if (!updatedData) {
            return res.status(404).send({ status: false, msg: "Data not found for the given mobile number" });
        }

         res.status(201).send({ status: true, data: updatedData })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}





const DeleteOrderWithMobileNumber=async(req,res)=>{

    try {

        const { mobile } = req.body; // Extract mobile number from the request body

        if (!mobile) {
            return res.status(400).send({ status: false, msg: "Mobile number is required" });
        }

        // Find and delete the user with the given mobile number
        const deletedUser = await OrderModel.findOneAndDelete({ mobile });

         res.status(201).send({ status: true,  msg: "User deleted successfully"})


    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}




















module.exports={OrderData , getAllOrder , getOrderByNumber , requestForUpdateByNumber , CheckPermission , 

    permissionGrant , requestForOderPreairedStatus , PermissionNewOrder , requestForOderPreairedStatusFalse , CancelOrderSumited , PermissionForCancelOrber , NotAcceptOrderRequest , DeleteOrderWithMobileNumber}