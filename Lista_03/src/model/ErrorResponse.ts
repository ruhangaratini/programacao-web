export class ErrorResponse {
    code: number;
    message: Object;

    constructor(code: number, message: Object) {
        this.code = code;
        this.message = message;
    }
}