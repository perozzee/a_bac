const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        status: 500,
        message: "Internal error",
        error: err.message});
};

export default errorHandler;