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
        this.setState({ selectedWorkshop: activity, activeComponent: component })
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
                <div id="container" className="h-100">
                    {activeComponent === 'WorkshopChoiceForm' ? (
                        <span>
                            <Header GoBackToStartPage={this.goBackToStartPage} />
                            <WorkshopChoiceForm selectWorkshop={this.selectWorkshop} /></span>
                    ) : activeComponent === 'WorkshopOverview' ? (
                        <span>
                            <Header GoBackToStartPage={this.goBackToStartPage} />
                        <WorkshopOverview Workshop={selectedWorkshop} startWorkshop={this.startWorkshop} /></span>
                    ) : activeComponent === 'WorkshopWizard' ? (
                            <WorkshopWizard Activities={workshopActivities} goBackToStartPage={this.goBackToStartPage} />   
                    ) : (
                                    <WorkshopChoiceForm />
                                )}
                </div>
        )
    }
}

export default Workout