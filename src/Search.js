import React, { Component } from 'react';


class SearchBox extends Component {
    render() {
        return (
            <form
                className="searchbox"
                onSubmit={this.handleClick.bind(this)}>
                <input
                    ref="search"
                    className="searchbox__input"
                    type="text"
                    placeholder="Search Lyrics"/>

                <input
                    type="submit"
                    className="searchbox__button"
                    value="Search" />
            </form>
        )
    }

    handleClick(e) {
        e.preventDefault()
        let trackname = this.refs.search.value
        // sending the trackname value to parent component to fetch new data from API
        this.props.fetchTracks(trackname)
        this.refs.search.value = ''
    }
}

export default SearchBox;
