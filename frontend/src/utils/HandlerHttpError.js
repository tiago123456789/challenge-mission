export default (error) => {
    error = error.response
    switch (error.status) {
        case 409: 
            return [error.data.message]
        case 400: 
            return Object.keys(error.data.message).map(key => error.data.message[key] )
        default:
            return "Oops occour error!!!"
    }
}