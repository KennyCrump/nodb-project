import React, {Component} from 'react'
import './Post.css'
// import axios from 'axios'

class Post extends Component{
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            editAllowed: false,
            message: ""
        }
    }

    setAllowEdit = (message) => {
        this.setState({
            message: this.props.message,
            editAllowed: true
        })
    }
    savePost = (message, id) => {
        this.props.saveEditMessage(message, id)
        this.setState({
            editAllowed: false
        })
    }

    handleEditMessage = (val) => {
        console.log("EDIT: ", this.state.message, "target: ", val.target.value)
        this.setState({message : val.target.value })
    }

    render(){
        console.log(this.state.message)
        let {userName, userImage, location, searchResult, id, key, quote, message, deletePost, saveEditMessage} = this.props
        return(
            <div key={key} className="postDisplay">
                <div className="leftSideDisplay">
                    <div className="leftTopDisplay">
                        <div className="imageContainer">
                            <img className="imageDisplay" src={userImage} alt=""/>
                        </div>
                        <div className ="nameAndLocation">
                            <p className="userName">{userName}</p>
                            <img src={`https://www.countryflags.io/${location}/shiny/48.png`} alt="flag"/>
                        </div>
                    </div>
                    <div className="ronQuoteDisplay"><p>{quote}</p></div>
                    <div className="buttonsDisplay">
                        {this.state.editAllowed
                        ?
                            <button className="saveButton" onClick={() => this.savePost(this.state.message, id)}>Save</button>
                        :
                            <button className="editButton" onClick={() => this.setAllowEdit()}>Edit</button>
                        }
                        <button className="deleteButton" onClick={(e) => deletePost(id)}>Delete</button>
                    </div>
                </div>
                <div className="rightSideDisplay">
                    <iframe className="videoDisplay" width="560" height="315" src={`https://www.youtube.com/embed/${searchResult}`} title={searchResult} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    {this.state.editAllowed 
                        ?
                        <div className="messageDisplayBox"><input type="text" className="messageEdit" value={this.state.message} onChange={(text) => this.handleEditMessage(text)}/></div>
                        :
                        <div className="messageDisplayBox"><p className="messageText">{message}</p></div>
                    }
                </div>
                
                
            </div>
        )
    }

}
export default Post