const errorHandlerMiddleware = (err,req,res,next) => {
    console.log(err);
    return res.status(err.status).json({msg: error.message})
}

module.exports = errorHandlerMiddleware 