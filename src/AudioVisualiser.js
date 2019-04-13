import React, { Component } from 'react'

export default class AudioVisualiser extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidUpdate() {
        this.draw();
    }

    getRndColor() {
    var r = 255 * Math.random() | 0,
        g = 255 * Math.random() | 0,
        b = 255 * Math.random() | 0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

    draw() {
        const { audioData } = this.props;
        const canvas = this.canvas.current;
        const height = canvas.height;
        const width = canvas.width;
        const context = canvas.getContext('2d');
        let x = 0;
        const sliceWidth = (width * 100.0) / audioData.length;
        context.lineWidth = 1;
        context.strokeStyle = this.getRndColor();
        // context.clearRect(0, 0, width, height);
        context.beginPath();
        // context.moveTo(0, height / 2);
        for (const item of audioData) {
            const y = (item / 255.0) * height;
            context.lineTo(x, y);
            // context.fillRect(x, y, 5, 5);
            x += sliceWidth ;
        }

        context.lineTo(x, height / 2);
        context.stroke();
    }



  render() {
    return (
        <canvas width="1000" height="1000" ref={this.canvas}/>
    )
  }
}
