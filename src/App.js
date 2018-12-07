import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Display from './Components/Display/Display'
import Sidebar from './Components/Sidebar/Sidebar'

import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userName: "",
      userImage: "https://picsum.photos/100/?random",
      location: "",
      quote: "",
      searchInput: "",
      searchResult: null,
      message: "",
      count: 100,
      refresh: true
    }
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }
    handleImageClick = () => { 
      let {count} = this.state;
      let newCount = count + 1;
      this.setState({count: newCount})
      axios.get(`https://picsum.photos/${newCount}`).then((res) => {
        // console.log(res.config.url)
        this.setState({userImage: res.config.url})
      })
    }

    handleLocationChange = (val) => {
     this.setState({location: val.target.value})
    }

    getRonQuote = () => {
      axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then((res) => {
        this.setState({quote: res.data})
      })
    }

    updateUserName = (val) => {
      this.setState({userName: val}, console.log(val))
    }

    updateSearchInput = (val) => {
      this.setState({searchInput: val}, console.log("search input ", this.state.searchInput))
    }

    updateSearchResult = () => {
      console.log("hello")
      axios.get(`https://www.googleapis.com/youtube/v3/search/?maxResults=1&part=snippet&q=${this.state.searchInput}&key=AIzaSyB_EHdg39WRvmz0pfCVdbo4TPtE6ANdpzE`)
      .then((res) => {
          console.log(res.data.items[0].id.videoId)
          this.setState({searchResult: res.data.items[0].id.videoId, searchInput: ""})
      })
    }

    updateMessage = (val) => {
      console.log(val)
      this.setState({message: val})
    }

    createPost = () => {
      let {userName, userImage, location, quote, searchResult, message} = this.state;
      axios.post('/api/post', {userName, userImage, location, quote, searchResult, message }).then(()=> this.setState({refresh: !this.state.refresh}))

      this.setState({      
        userName: "",
        userImage: "https://picsum.photos/100/?random",
        location: "",
        quote: "",
        searchInput: "",
        searchResult: "",
        message: "" })

    }
  render() {
    console.log("main state ", this.state)
    return (
      <div className="App" >
        <Header />
        
        <Sidebar handleImageClick={this.handleImageClick}
        userImage={this.state.userImage}
        userName={this.state}
        handleLocationChange={this.handleLocationChange}
        location={this.state.location}
        updateUserName={this.updateUserName}
        getRonQuote ={this.getRonQuote}
        quote={this.state.quote}
        updateVideo={this.updateVideo}
        searchResult={this.state.searchResult}
        updateSearchInput={this.updateSearchInput}
        searchInput={this.state.searchInput}
        updateSearchResult={this.updateSearchResult}
        updateMessage={this.updateMessage}
        message={this.state.message}
        createPost={this.createPost}/>
        <Display refresh={this.state.refresh}/> 

      </div>
    );
  }
}

export default App;