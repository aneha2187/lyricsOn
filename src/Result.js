import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';


class Result extends Component {
    render() {
        let data = this.props.data;
        let tracksList = data.tracks;
        let rows = '';
        if (tracksList === "") {
            rows += "<br><div class='track_content content'><h2>Welcome to The World of Lyrics !</h2></div>"
        } else if (tracksList.length !== 0) {
            tracksList.map(track => {
                rows += "<br><div class='track_content'>" +
                    "<p>Album Name : " + track.track.album_name + "</p>" +
                    "<p> Track Name : " + track.track.track_name + "</p>" +
                    "<p>Artist Name : " + track.track.artist_name + "</p>" +
                    "<p>Lyrics : <a target='blank' href="+ track.track.track_share_url + "/>" + track.track.track_share_url + "</a></p>" +
                    "</div>" ;
            })
        }
        else if(tracksList.length == 0 && tracksList !== ""){
            rows += "<br><div class='track_content'>No Result Found.</div>"
        }
        return <div className="result_container">{ ReactHtmlParser(rows) }</div>
    }
}

export default Result;