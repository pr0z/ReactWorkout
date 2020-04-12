import React, { Component } from 'react'
import workshops from './data/workshops.json'

class WorkshopChoiceForm extends Component {
    state = {
        selectedWorkshops: [],
        availableWorkshops: workshops
    }

    handleChange = event => {
        const { options } = event.target

        var selected = [];
        for (let i = 0; i < options.length; i++) {
            const element = options[i];
            if (element.selected) {
                selected.push(element.value)
            }
        }

        this.setState({
            selectedWorkshops: selected
        })
    }

    handleClick = activity => {
        this.props.selectWorkshop(activity, "WorkshopOverview");
    }

    render() {
        const workshops = this.state.availableWorkshops;
        return (
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <br />
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Ateliers</h2>
                    <br />
                    <div className="row">
                        {workshops.map((workshop, index) => (
                            <div className="col-md-6 col-lg-4 mb-5">
                                <a href="#" onClick={this.handleClick.bind(null, workshop.Category)}>
                                    <div className="portfolio-item mx-auto" data-toggle="modal"  data-target="#portfolioModal3">
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/"+workshop.Image+".png"} alt="" />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default WorkshopChoiceForm;