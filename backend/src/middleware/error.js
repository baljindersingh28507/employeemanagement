function errorHandler(err, req, res, next) {
    // console.log(err, typeof err);
    switch (true) {

        case typeof err === 'string':
            // custom application error
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ status: statusCode, message: err, data: null, });
        case typeof err === 'object':

            return res.status(400).json({ status: 400, message: err.message, data: null, });
        case err.name === 'UnauthorizedError':
            // jwt authentication error
            return res.status(401).json({ status: 401, message: 'Unauthorized', data: null, });
        default:
            return res.status(500).json({ status: 500, message: err.message, data: null, });
    }
}

module.exports = errorHandler;