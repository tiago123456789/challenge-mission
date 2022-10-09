const extractResponse = (response) => {
    if (response.data) {
        return response.data;
    }
    return response
}

export {
    extractResponse
}