import React, { Component } from 'react'

class Timer extends Component {
    state = {
        seconds: this.props.Seconds,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds } = this.state
            
            if (seconds > 0) {
                if (this.props.IsRunning){
                    this.setState(({ seconds }) => ({
                        seconds: seconds - 1
                    }))
                }
            }
            if (seconds === 0) {
                this.timerCompleted();
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    timerCompleted() {
        this.props.SetNext();
        this.props.timerCompleted(this.props.Activity);
    }

    render() {
        const { seconds } = this.state
        return (
            <span>
                {seconds === 0
                    ? <span></span>
                    : <span>{seconds < 10 ? `0${seconds}` : seconds} secondes restantes</span>
                }
            </span>
        )
    }
}

export default Timer