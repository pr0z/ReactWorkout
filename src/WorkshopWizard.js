import React, { Component } from 'react'
import WizardActivityStep from './WizardActivityStep'
import StepWizard from 'react-step-wizard';

class WorkshopWizard extends Component {

    componentDidMount() {
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
                                SetNext={this.setNext} />
                        ))}
                    </StepWizard>
                </div>
            
        )
    }

}

export default WorkshopWizard   