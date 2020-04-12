import React, { Component } from 'react'
import activities from './data/activities.json'
import workshops from './data/workshops.json'

class WorskshopOverview extends Component {
    constructor(props){
        super(props)
        
        var workshop = workshops.filter((wks) => wks.Category === this.props.Workshop)[0];
        var filteredActivities = this.shuffle(activities.filter((activity) => activity.Category === this.props.Workshop)).slice(0, 5)
        var workshopActivities = [];
        var longRest = Object.assign({}, filteredActivities[0]);
        longRest.Name = "Repos long";
        longRest.Duration = workshop.IntervalBetweenRepetition;
        longRest.GifPath = "rest";

        for (let index = 0; index < workshop.NumberOfRepetition; index++) {
            var count = 0;
            filteredActivities.forEach(activity => {
                workshopActivities.push(activity);

                if (activity !== filteredActivities[filteredActivities.length - 1]){
                    var shortRest = Object.assign({}, activity);
                    var incoming = filteredActivities[++count];

                    shortRest.Duration = workshop.IntervalBetweenActivity;
                    shortRest.GifPath = "rest";
                    shortRest.Name = "Repos court";

                    if (incoming !== undefined){
                        shortRest.Incoming = incoming.Name;
                    }
                    
                    workshopActivities.push(shortRest)
                }
            });

            workshopActivities.push(longRest);
        }

        this.state = {
            filteredActivities: filteredActivities,
            selectedWorkshop: workshop,
            workshopActivities: workshopActivities
        }
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    handleClick = () => {
        this.props.startWorkshop(this.state.workshopActivities, "WorkshopWizard")
    }

    render() {
        return (
            <section className="page-section">
                <div className="container">
                    <br />
                    <h2 className="text-center text-uppercase text-secondary mb-0">{this.state.selectedWorkshop.Name}</h2>
                    <h4 className="text-center text-secondary mb-0">{this.state.selectedWorkshop.NumberOfRepetition} répétitions</h4>
                    <h4 className="text-center text-secondary mb-0">Repos : {this.state.selectedWorkshop.IntervalBetweenActivity}s - {this.state.selectedWorkshop.IntervalBetweenRepetition}s</h4>
                    <br />
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Activité</th>
                                    <th className="right-col" scope="col">Durée</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.filteredActivities.map((activity, index) => (
                                    <tr key={index}>
                                        <td>{activity.Name}</td>
                                        <td className="right-col">{activity.Duration} secondes</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <a className="btn btn-primary" href="#" role="button" onClick={this.handleClick.bind(null)}>Démarrer</a>
                </div>
            </section>
        )
    }
}

export default WorskshopOverview