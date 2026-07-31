const { isCelebrateError } = require("celebrate");

const { SERVER_ERROR } = require("../utils/errors");

module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (isCelebrateError(err)) {
    const [validationError] = Array.from(err.details.values());
    const [{ message }] = validationError.details;

    return res.status(400).send({ message });
  }

  const { statusCode = SERVER_ERROR, message } = err;

  return res.status(statusCode).send({
    message:
      statusCode === SERVER_ERROR
        ? "An error has occurred on the server."
        : message,
  });
};
