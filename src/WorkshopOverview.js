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

        var sumActivity = filteredActivities.reduce((accumulator, current) => {
            return accumulator + Number.parseInt(current.Duration) + Number.parseInt(workshop.IntervalBetweenActivity);
        }, 0) * workshop.NumberOfRepetition;
        var sumLongRest = workshop.IntervalBetweenRepetition * workshop.NumberOfRepetition;

        var totalDurationInMinutes = Math.ceil((sumActivity + sumLongRest) / 60);

        var workshopCount = 0;
        for (let index = 0; index < workshop.NumberOfRepetition; index++) {
            ++workshopCount;
            var activityCount = 0;
            var progress = workshop.Name + " " + workshopCount + "/" + workshop.NumberOfRepetition
            
            filteredActivities.forEach(activity => {
                var copy = Object.assign({}, activity);
                copy.Progress = progress;
                workshopActivities.push(copy);
                
                if (activity !== filteredActivities[filteredActivities.length - 1]){
                    var shortRest = Object.assign({}, copy);
                    var incoming = filteredActivities[++activityCount];

                    shortRest.Duration = workshop.IntervalBetweenActivity;
                    shortRest.GifPath = "rest";
                    shortRest.Name = "Repos court";

                    if (incoming !== undefined){
                        shortRest.Incoming = incoming.Name;
                    }
                    
                    workshopActivities.push(shortRest)
                }
            }
            );

            workshopActivities.push(longRest);
        }

        this.state = {
            filteredActivities: filteredActivities,
            selectedWorkshop: workshop,
            workshopActivities: workshopActivities,
            totalDurationInMinutes: totalDurationInMinutes
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
                    <h4 className="text-center text-secondary mb-0">{this.state.selectedWorkshop.NumberOfRepetition} répétitions - {this.state.totalDurationInMinutes} mn</h4>
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
                    <button className="btn btn-primary w-100" onClick={this.handleClick.bind(null)}>Démarrer</button>
                </div>
            </section>
        )
    }
}

export default WorskshopOverview