const  globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);

    
    // A. Duplicate Key (e.g., unique email, password)
    if (err.code === 11000) {
        err.status = 400;
    }

    if (err.name === "ValidationError" || err.name === "CastError") {
        err.status = 400;
    }

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
}

module.exports = globalErrorHandler