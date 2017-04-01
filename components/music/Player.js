import React from 'react';
import ReactDOM from 'react-dom';
import '../../style/musicplayer.css';

var Player = React.createClass({
    getDefaultProps: function() {
        //歌单列表
        return {
            "tracks": [{
                "name": "平凡之路",
                "duration": 136829,
                "mp3Url": "http://p2.music.126.net/at0wmUoxoCMqDJbJt1QFeQ==/5935163767130356.mp3"
            }, {
                "name": "Speed Of Sound ",
                "duration": 109000,
                "mp3Url": "http://p2.music.126.net/XGEBBSDsq8bKKCZz1j-pKA==/2093470139295642.mp3"
            }, {
                "name": "Storm",
                "duration": 295575,
                "mp3Url": "http://p2.music.126.net/_z-I1TmrKCJxRUaMeSqEdA==/6649846326093096.mp3"
            }]
        }
    },

    //初始化状态
    getInitialState: function() {
        return {
            currentTrackLen: this.props.tracks.length, //歌单歌曲数
            currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
            currentTime: 0, //当前歌曲播放的时间
            currentTotalTime: 0, //当前歌曲的总时间
            playStatus: true, //true为播放状态，false为暂停状态		
        }
    },

    //更新播放状态
    updatePlayStatus: function() {
        let audio = document.getElementById('audio');
        if (this.state.playStatus) {
            audio.play();
        } else {
            audio.pause();
        }

        //更新当前歌曲总时间
        this.setState({
            currentTotalTime: this.props.tracks[this.state.currentTrackIndex].duration / 1000
        });
    },

    //播放事件处理
    play: function() {
        //这里有setState是异步的，需要在回调中执行
        this.setState({
            playStatus: !this.state.playStatus
        }, () => {
            this.updatePlayStatus();
        });
    },

    //上一曲事件处理
    previous: function() {
        if (this.state.currentTrackIndex - 1 < 0) {
            alert('已经没有上一首了');
        } else {
            this.setState({
                currentTrackIndex: --this.state.currentTrackIndex
            }, () => {
                this.updatePlayStatus();
            });
        }
    },

    //下一曲事件处理
    next: function() {
        if (this.state.currentTrackIndex + 1 >= this.state.currentTrackLen) {
            alert('已经没有下一首了');
        } else {
            this.setState({
                currentTrackIndex: ++this.state.currentTrackIndex
            }, () => {
                this.updatePlayStatus();
            });
        }
    },

    //DOM加载完
    componentDidMount: function() {
        this.updatePlayStatus();
        setInterval(() => {
            let audio = document.getElementById('audio');
            this.setState({
                currentTime: audio.currentTime
            }, () => {
                if (~~this.state.currentTime >= ~~this.state.currentTotalTime) {
                    this.next();
                }
            });
        }, 300);
    },
    render: function() {
        return ( < div className = "player" > { /* 播放器名称  */ } < div className = "header" > music player < /div>				

            { /* 音乐专辑图  */ } < TrackInfo track = {
                this.props.tracks[this.state.currentTrackIndex]
            }
            />

            { /* 音乐信息   */ } < Progress progress = {
                this.state.currentTime / this.state.currentTotalTime * 100 + '%'
            }
            />

            { /* 播放进度条  */ } < Controls isPlay = {
                this.state.playStatus
            }
            onPlay = {
                this.play
            }
            onPrevious = {
                this.previous
            }
            onNext = {
                this.next
            }
            />

            { /* 播放时间   */ } < Time currentTime = {
                this.state.currentTime
            }
            currentTotalTime = {
                this.state.currentTotalTime
            }
            />

            { /* 音频控件  */ } < audio id = "audio"
            src = {
                this.props.tracks[this.state.currentTrackIndex].mp3Url
            } > < /audio> < /div >
        );
    }
});

var TrackInfo = React.createClass({
    render: function() {
        return ( < div >
            < div className = 'trackInfo' > < div className = "name" > {
            this.props.track.name
        } < /div> 			 
        < /div > < /div>);
}
});

var Progress = React.createClass({
    render: function() {
        return ( < div className = "progress"
            style = {
                {
                    'width': this.props.progress
                }
            } > < /div>
        )
    }
});

var Controls = React.createClass({
    render: function() {
        let className;
        if (this.props.isPlay == true) {
            className = 'icon-pause';
        } else {
            className = 'icon-play';
        }
        return ( < div className = "controls" >
            < div className = "play"
            onClick = {
                this.props.onPlay
            } >
            < i className = {
                className
            } > < /i> < /div > < div className = "previous"
            onClick = {
                this.props.onPrevious
            } >
            < i className = "icon-previous" > < /i> < /div > < div className = "next"
            onClick = {
                this.props.onNext
            } >
            < i className = "icon-next" > < /i> < /div > < /div>  			
        )
    }
});

var Time = React.createClass({
    timeConvert: function(timestamp) {
        var minutes = Math.floor(timestamp / 60);
        var seconds = Math.floor(timestamp - (minutes * 60));

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        timestamp = minutes + ':' + seconds;
        return timestamp;
    },
    render: function() {
        return ( < div className = "time" >
            < div className = "current" > {
                this.timeConvert(this.props.currentTime)
            } < /div> < div className = "total" > {
            this.timeConvert(this.props.currentTotalTime)
        } < /div> < /div >
    );
}
});

export default Player
