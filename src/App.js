import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import $ from 'jquery';
import '../assets/stylesheet/App.css';
import SearchBox from './Search.js';
import Result from './Result.js';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tracks: ''
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>LyricsOn</h2>
                </div>
                <div className="Search-container">
                    <SearchBox fetchTracks={this.fetchTracks.bind(this)}/>
                </div>
                <Result data={this.state} />
            </div>
        )
    }

    fetchApi(url) {
        $.ajax({
            type: "GET",
            data: {
                apikey:"87945af72c736f7e8565a62a8d5c0094",
                f_has_lyrics: 1,
                format:"jsonp",
                callback:"jsonp_callback"
            },
            url: url,
            dataType: "jsonp",
            jsonpCallback: 'jsonp_callback',
            contentType: 'application/json',
            success: function(data) {
                this.setState({
                    tracks: data.message.body.track_list
                });
            }.bind(this),
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    }
    fetchTracks(trackname) {
        let url = `http://api.musixmatch.com/ws/1.1/track.search?q_track=` + trackname
        this.fetchApi(url)
    }
}



export default App;