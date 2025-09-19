function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    error: err.name || "InternalError",
    message: err.message || "Something went wrong",
  });
  next();
}

module.exports = errorHandler;
