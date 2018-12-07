import React, {Component} from 'react'
import './Display.css'
import axios from 'axios'

import Post from '../Post/Post'

class Display extends Component{
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            editAllowed: false,
            message: ""
        }
    }

    componentWillReceiveProps(props){
        let {refresh} = this.props
        if(props.refresh !== refresh){
            axios.get('/api/post').then(res => {this.setState({ posts: res.data })})
        }
    }

    componentDidMount = () => {
        axios.get('/api/post').then(res => {this.setState({ posts: res.data })})
    }

    deletePost = (postID) => {
        axios.delete(`/api/post/${postID}`).then(res => {this.setState({posts: res.data})})
    }

    saveEditMessage = ( updatedPost, postID ) => {
        axios.put(`api/post/${postID}`, {message: updatedPost}).then(res => this.setState({posts: res.data}))
        this.setState({editAllowed: false})
    }
    render(){
        let {posts} = this.state
        console.log("POSTS ARRAY",posts)
        let postList = posts.map((post) => {
            console.log("INDIVIDUAL POST: ", post)
           return( 
               <Post 
               userName={post.userName}
               userImage={post.userImage}
               location={post.location}
               searchResult={post.searchResult}
               id={post.id}
               key={post.id}
               quote={post.quote}
               message={post.message}
               editAllowed={this.state.editAllowed}
               deletePost={this.deletePost}
               saveEditMessage={ this.saveEditMessage}/>
           )
        })


        return (
            <div className="display">
                {postList}
            </div>
        )
    }
}

export default Display