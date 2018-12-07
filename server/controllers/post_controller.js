const posts = [];
id = 1;




module.exports = {
    
    create: (req, res) => {
        let {userName, location, userImage, searchResult, quote, message} = req.body
        let newPost = {
            userName,
            location,
            userImage,
            searchResult,
            quote,
            message,
            id
        }
        id++
        posts.push(newPost)
        res.status(200).send(posts)
    },
    read: (req, res) => {
        res.status(200).send(posts)
    },
    update: (req, res) => {
        let {message} = req.body
        postID = null;
        posts.forEach((post, index) => {
            if(post.id === Number(req.params.id)){
                postID = index
            }
        })
        posts[postID] = {
            id: posts[postID].id,
            userImage: posts[postID].userImage,
            userName: posts[postID].userName, 
            location: posts[postID].location,
            quote: posts[postID].quote,
            searchResult: posts[postID].searchResult, 
            message: message || posts[postID].message
        }
        res.status(200).send(posts)
    },
    delete: (req, res) => {
        deleteIndexNumber = null;
        posts.forEach((post, index) => {
            if(post.id === Number(req.params.id)){
                deleteIndexNumber = index;
            }
        })
        posts.splice(deleteIndexNumber, 1)
        res.status(200).send(posts)
    }


    
}