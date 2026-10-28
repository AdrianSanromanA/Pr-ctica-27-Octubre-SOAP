export const requestLogger = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[LOG] Método: ${req.method} | URL: ${req.originalUrl} | Estado: ${res.statusCode} | Tiempo: ${duration}ms`);
    });

    next();
};