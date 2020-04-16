import React, { Component } from 'react'
import WizardActivityStep from './WizardActivityStep'
import StepWizard from 'react-step-wizard';

class WorkshopWizard extends Component {

    timerCompleted = (activity) => {
        if (activity.Name === this.props.Activities[this.props.Activities.length - 1].Name){
            this.props.goBackToStartPage();
        }
    }

    render() {
        return (
            <div className="col-md-12 h-100">
                <StepWizard>
                    {this.props.Activities.map((activity, index) => (
                        <WizardActivityStep
                            key={index}
                            Activity={activity}
                            GoBackToStartPage={this.props.goBackToStartPage}
                            timerCompleted={this.timerCompleted.bind(activity)} />
                    ))}
                </StepWizard>
            </div>
        )
    }

}

export default WorkshopWizard   