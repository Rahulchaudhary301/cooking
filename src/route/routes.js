const express= require("express")
const UserController =require('../Controller/userController')
const ItemController =require('../Controller/ItemController')
const OrderController = require('../Controller/OrderController')
const router= express.Router()

//const middleware= require("../middleware/middleware")

//const userController = require("../controllers/userController")
//const BooksController = require("../controllers/booksController")
//const ReviewController = require("../controllers/reviewController")

router.get("/", function(req,res){
    res.send("done")
})




router.post("/register",UserController.userCrete)

router.post("/login",UserController.UserLogin)

router.post("/rice",ItemController.RiceData)

router.get("/getUser",UserController.getAllUser)
router.get("/getOrder",OrderController.getAllOrder)

router.get("/riceData",ItemController.AllRiceData)


router.post("/order",OrderController.OrderData)

//router.post("/books",middleware.authenticate,BooksController.createBooks)
//router.get("/books",BooksController.getBooksData)
//router.get("/books/:bookId",middleware.authenticate,BooksController.getBooksDataWithReviews)

//router.put("/books/:bookId",middleware.authenticate,middleware.authorize,BooksController.updateBooksData)
//router.delete("/books/:bookId",middleware.authenticate,middleware.authorize,BooksController.deleteBooksData)
//router.post("/books/:bookId/review",ReviewController.createReview)
//router.put("/books/:bookId/review/:reviewId",ReviewController.updateReviews)
//router.delete("/books/:bookId/review/:reviewId",ReviewController.deleteReviews)




router.all("/*", function(req,res){
    res.status(400).send({message:"url is wrong"})
})


module.exports = router