
const OrderListItemModel =require('../Model/OrederListForClientsModel')















const OrderListItem = async (req, res) => {
    try {
        const order = req.body; 

    //console.log('Rahuccccccccccccccc' , order)
       // Check if the mobile number exists in the request
       if (!order.mobile) {
        return res.status(400).send({ 
            status: false, 
            message: "Mobile number is required to process the order" 
        });
    }


    // Delete previous orders for the given mobile number
    await OrderListItemModel.deleteMany({ mobile: order.mobile });

    // Save the new order
    await OrderListItemModel.create(order);

        res.status(201).send({ status: true, message: "Data fetch successfully",});
    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
};







const getOrderListFromOwner=async(req,res)=>{

    try {

        const {mobile} = req.body

       // console.log(mobile)
        
         const data= await OrderListItemModel.find({mobile:mobile})

         res.status(201).send({ status: true, data: data })
    }

    catch (err) {

        res.status(500).send({ status: false, msg: err.message })

    }

}





module.exports={OrderListItem , getOrderListFromOwner}