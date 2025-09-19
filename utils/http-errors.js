class CustomError extends Error {
  constructor(name, message, statusCode) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequestError extends CustomError {
  constructor(message = "Bad Request") {
    super("BadRequestError", message, 400);
  }
}

class NotFoundError extends CustomError {
  constructor(message = "Not Found") {
    super("NotFoundError", message, 404);
  }
}

class ConflictError extends CustomError {
  constructor(message = "Conflict") {
    super("ConflictError", message, 409);
  }
}

module.exports = {
  CustomError,
  BadRequestError,
  NotFoundError,
  ConflictError,
};
