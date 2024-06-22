// extends Error indica que customAPIError hereda de la clase Error nativa de JavaScript. Esto significa que customAPIError tendrá todas las propiedades y métodos de un Error, más cualquier cosa que definamos específicamente para customAPIError.

// super se utiliza para llamar al constructor de la clase base (Error en este caso).

class customAPIError extends Error {
    constructor(message,statusCode) {
        super(message)
        this.statusCode = statusCode            
        }
    }


    const createCustomError = (msg, statusCode) => {
        return new customAPIError(msg,statusCode)
    }

module.exports = { createCustomError, customAPIError}