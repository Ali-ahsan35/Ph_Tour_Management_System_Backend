
class AppError extends Error{
    public statusCode: number;

    constructor(StatusCode: number, message: string, stack = ""){
        super(message)
        this.statusCode = StatusCode
        if (stack) {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default AppError;