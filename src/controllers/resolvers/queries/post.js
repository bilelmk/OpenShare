const queries = {
    async posts (parent, {channelId, query, orderBy, pagination}, cnxt, info){
        throw new Error ('query not implemented yet')
    },
    async post (parent, {id}, cnxt, info){
        throw new Error ('query not implemented yet')
    }
}
export default queries