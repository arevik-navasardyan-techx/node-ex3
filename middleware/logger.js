function logger(req, res, next) {
  console.log(`In middleware: ${req.method}, ${req.url}`);
  next();
}

module.exports = logger;
