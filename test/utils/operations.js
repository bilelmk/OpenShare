


export * from './operations/channelOperations'
export * from './operations/memberOperations'
export * from './operations/messengerOperations'
export * from './operations/eventOperations'
// const getProfile = gql`
//     query {
//         me {
//             id
//             name
//             email
//         }
//     }
// `

// const getPosts = gql`
//     query {
//         posts {
//             id
//             title
//             body
//             published
//         }
//     }
// `

// const myPosts = gql`
//     query {
//         myPosts {
//             id
//             title
//             body
//             published
//         }
//     }
// `

// const updatePost = gql`
//     mutation($id: ID!, $data: UpdatePostInput!) {
//         updatePost(
//             id: $id,
//             data: $data
//         ){
//             id
//             title
//             body
//             published
//         }
//     }
// `


// const deletePost = gql`
//     mutation($id: ID!) {
//         deletePost(
//             id: $id
//         ) {
//             id
//         }
//     }
// `

// const deleteComment = gql`
//     mutation($id: ID!) {
//         deleteComment(
//             id: $id
//         ) {
//             id
//         }
//     }
// `

// const subscribeToComments = gql`
//     subscription($postId: ID!) {
//         comment(postId: $postId) {
//             mutation
//             node {
//                 id
//                 text
//             }
//         }
//     }
// `

// const subscribeToPosts = gql`
//     subscription {
//         post {
//             mutation
//         }
//     }
// `

