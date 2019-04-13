import React, { Component } from 'react';
import './App.css';
import AudioAnalyser from './AudioAnalyser';

class App extends Component {
    constructor() {
        super();

        this.state = {
            audio: null,
            showAudio: false
        }

        this.toggleMicrophone = this.toggleMicrophone.bind(this);
    }

    async getUserMicrophone() {
        const audio = await navigator.mediaDevices.getUserMedia({
            audio: true,
            // video: true
        });
        this.setState({ audio: audio, showAudio: true });
        console.log(audio);
    }

    stopMicrophone() {
        this.state.audio.getTracks().forEach(track => track.stop());
        this.setState({ audio: null });
    }

    toggleMicrophone() {
        if (this.state.audio) {
            this.stopMicrophone();
        } else {
            this.getUserMicrophone();
        }
    }

  render() {
    return (
      <div className="App">
            <button onClick={this.toggleMicrophone}>
                {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
            </button>
            {this.state.showAudio ? <AudioAnalyser audio={this.state.audio}/> : ''}
      </div>
    );
  }
}

export default App;
