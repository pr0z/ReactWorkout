import React, { Component } from 'react'
import Timer from './Timer'
import * as Icon from 'react-bootstrap-icons';

class WizardActivityStep extends Component {

    state = {
        activity: this.props.Activity,
        timerIsRunning: true
    }

    handleTimerStatusChange = () => {
        if (this.state.timerIsRunning){
            this.setState({
                timerIsRunning: false
            })
        } else {
            this.setState({
                timerIsRunning: true
            })
        }
    }

    render() {
        const activity = this.state.activity;
        const isActive = this.props.isActive;

        return (
            <div className="activity-container">
                <div className="row h-50">
                    <img src={process.env.PUBLIC_URL + "/assets/exercices/" + activity.GifPath + ".gif"} className="h-100 w-100" alt={activity.GifPath} />
                </div>
                <div className="row h-25">
                    <div className="col-md-12">
                        <br />
                        <h3 className="text-center">{activity.Name}</h3>
                        <h3 className="text-center">{activity.Progress}</h3>
                        {isActive ? (
                            <span>
                                <h3 className="text-center">
                                    <Timer Seconds={activity.Duration} SetNext={this.props.nextStep} IsRunning={this.state.timerIsRunning} />
                                </h3>
                            </span>
                        ) : (<span></span>)}
                        {activity.hasOwnProperty('Incoming') ? (
                            <h3 className="text-center">A venir : {activity.Incoming}</h3>
                        ) : (<span></span>)}
                    </div>
                </div>
                <br />
                <br />
                <div className="row h-25">
                    <div className="col-md-12 text-center">
                        <button onClick={this.props.previousStep} className="btn btn-primary btn-circle btn-md">
                            <Icon.ChevronLeft
                                size={16} />
                        </button>&nbsp;
                        <button onClick={this.props.GoBackToStartPage} className="btn btn-primary btn-circle btn-md">
                            <Icon.Stop 
                                size={16} />
                        </button>&nbsp;
                        <button onClick={this.handleTimerStatusChange} className="btn btn-primary btn-circle btn-md">
                            {this.state.timerIsRunning ? 
                                <Icon.Pause size={16} /> :
                                <Icon.Play size={16} />
                            }
                        </button>&nbsp;
                        <button onClick={this.props.nextStep} className="btn btn-primary btn-circle btn-md">
                            <Icon.ChevronRight 
                                size={16} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WizardActivityStep