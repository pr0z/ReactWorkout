import React, { Component } from 'react';
import WorkshopChoiceForm from './WorskopChoiceForm'
import Header from './Header'
import WorkshopOverview from './WorkshopOverview'
import WorkshopWizard from './WorkshopWizard'

class Workout extends Component {
    state = {
        activeComponent: 'WorkshopChoiceForm',
        selectedWorkshop: '',
        workshopActivities: []
    }

    selectWorkshop = (activity, component) => {
        this.setState({ selectedWorkshop: activity, activeComponent: component})
    } 

    startWorkshop = (activities, component) => {
        this.setState({
            workshopActivities: activities,
            activeComponent: component
        })
    }

    goBackToStartPage = () => {
        this.setState({
            activeComponent: "WorkshopChoiceForm",
            selectedWorkshop: '',
            workshopActivities: []
        })
    }

    render() {
        var selectedWorkshop = this.state.selectedWorkshop
        var activeComponent = this.state.activeComponent
        var workshopActivities = this.state.workshopActivities

        return (
            <div>
                <Header GoBackToStartPage={this.goBackToStartPage} />
                <div id="container">
                    {activeComponent === 'WorkshopChoiceForm' ? (
                        <WorkshopChoiceForm selectWorkshop={this.selectWorkshop} />
                    ) : activeComponent === 'WorkshopOverview' ?  (
                        <WorkshopOverview Workshop={selectedWorkshop} startWorkshop={this.startWorkshop} />
                    ) : activeComponent === 'WorkshopWizard' ?  (
                        <WorkshopWizard Activities={workshopActivities} />
                    ) : (
                        <WorkshopChoiceForm  />
                    )}
                </div>
            </div>
        )
    }
}

export default Workout