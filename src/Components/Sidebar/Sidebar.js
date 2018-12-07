import React, {Component} from 'react'
import './Sidebar.css'
// import axios from 'axios'
import searchIcon from '../images/searchIcon.ico'

class Sidebar extends Component{
    constructor(props){
        super(props)
        this.state={
            searchInput: null,
            searchResult: null
        }
    }

    // youtubeSearch = () => {
        // console.log("hello")
        // axios.get(`https://www.googleapis.com/youtube/v3/search/?maxResults=1&part=snippet&q=${this.state.searchInput}&key=AIzaSyB_EHdg39WRvmz0pfCVdbo4TPtE6ANdpzE`)
        // .then((res) => {
        //     console.log(res.data.items[0].id.videoId)
        //     // this.props.updateSearchInput(res.data.items[0].id.videoId)
        //     this.setState({searchResult: res.data.items[0].id.videoId})
        // })
    // }
//    updateSearchInput = (e) => {
       
//         this.setState({searchInput: e.target.value}, console.log("search input ", this.state.searchInput))
//    }

    render(){
        console.log("component ", this.state, this.props)
        return (
            <div className="sidebar">
                <div className="userInfo">
                    <div className="leftSideUser">
                        <img className="userImage" src={this.props.userImage} alt=""/>
                        <button className="imageButton" onClick={this.props.handleImageClick}>Random Image</button>
                    </div>
                    <div className="rightSideUser">
                        <input className="userInput"
                        type="text" 
                        value={this.props.userName.userName}
                        placeholder="Enter User Name"
                        onChange={(e) => this.props.updateUserName(e.target.value)}/>
                        <select className="location" value={this.props.location} name="location" onChange={(e) => this.props.handleLocationChange(e)}>
                            <option value="">Choose Location</option>
                            <option value="us" >United States</option>
                            <option value="fr">France</option>
                            <option value="mx">Mexico</option>
                            <option value="nz">New Zealand</option>
                            <option value="jp">Japan</option>
                            <option value="eg">Egypt</option>
                        </select>
                    </div>
                    <div className="bottomUser">
                        <div id="getQuoteButtonAndDisplay">
                            <button className="quoteButton" onClick={this.props.getRonQuote}>Get Ron Swanson Quote</button>
                            <p className="ronQuote">{this.props.quote}</p>
                        </div>
                    </div>
                </div>
            
                <div className="youtubeSearch">
                    <div id="searchBar">
                        <input id="textBox" className="textBox" type="text" value={this.props.searchInput} placeholder="Search YouTube" onChange={(e) => this.props.updateSearchInput(e.target.value)}/>
                        <button className="searchButton" onClick={this.props.updateSearchResult}><img className="searchIcon" src={searchIcon} alt="icon"/></button>
                    </div>
                    {this.props.searchResult !== null &&
                    <iframe className="videoResult" width="280" height="157.5" src={`https://www.youtube.com/embed/${this.props.searchResult}`} title={this.props.searchResult} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    }
                </div>
                    
                <div id="addMessageDiv">
                    <input  className="addMessageBox" id="addMessageBox" type="text" placeholder="Add a message" value={this.props.message} onChange={(e) => this.props.updateMessage(e.target.value)}/>
                </div>
                <button className="createButton" id="createButton" onClick={this.props.createPost}>Create Post</button>
            </div>
        )
    }
}

export default Sidebar