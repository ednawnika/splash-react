import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
     tick(){
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    componentDidMount(){
        this.intervalID = setInterval(() => this.tick(),
        1000
        );
    }
    componentWillMount(){
        clearInterval(this.intervalID);
    }


    render() {
        return (
            <p className="App-clock">
                The time is {this.state.time}.
            </p>
        );
    }
}

export default Clock;