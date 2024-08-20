// server/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        // In production, you might want to hide the stack trace
        // stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack, // Example: hiding stack trace in production
    });
};

module.exports = errorHandler;
