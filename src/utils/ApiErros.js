class ApiError extends Error {
    constructor(StatusCode,message,errors=[],stack=""){
        super(message)
        this.StatusCode=StatusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
    }
}

export {ApiError}