export const fsErrorCallback = (error)=> {
    if (error) {
        throw new Error(ERROR_MESSAGE);
    }
}

export const ERROR_MESSAGE = "FS operation failed";