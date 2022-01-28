import NextAuth from 'next-auth'

export default NextAuth({
    // https://next-auth.js.org/configuration/providers
    providers: [],
    secret: process.env.SECRET,
    logger: {
        error(code, metadata) {
            console.error(code, metadata)
        },
        warn(code) {
            console.warn(code)
        },
        debug(code, metadata) {
            console.debug(code, metadata)
        }
    },
    // Enable debug messages in the console if you are having problems
    debug: false,
})