import React, { Component } from 'react'
import ScreenNav from '../navigation/ScreenNav'
import axios from 'axios'

class Videos extends Component {
    constructor() {
        super()
        this.state = {
            youTubeVideos: [],
            youTubeVideosUrl: []
        }
    }

    componentDidMount() {
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAxljpEKy0-vwjWrGJEYcOsohzfBDPe8wE&channelId=UCbcMVpCRxwcqaT1wiWM_ocg&part=snippet,id&order=date&maxResults=20')
            .then(resp => resp.json())
            .then((resp) => {
                this.setState({
                    youTubeVideos: resp.items
                });
                let videoUrls = [];
                this.state.youTubeVideos.forEach(video => {
                    if(video.id.videoId) {
                        let url = "https://www.youtube.com/embed/" + video.id.videoId;
                        videoUrls.push(url)
                    }
                });
                this.setState({
                    youTubeVideosUrl: videoUrls
                })
            });
    }

    render () {
        const listVideos = this.state.youTubeVideosUrl.map((videoUrl) =>
            <li key={videoUrl}>
                <iframe width="560" height="315" src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </li>
        );

        return (
            <div className="container">
                <ScreenNav/>
                <div>
                    <h1 className="text-center">Videos</h1>
                    <ul>{listVideos}</ul>
                </div>
            </div>
        )
    }
}

export default Videos