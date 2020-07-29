exports.handler = async (event, context) => {
    try {
        return {
            statusCode: 200,
            body: "meow",
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}