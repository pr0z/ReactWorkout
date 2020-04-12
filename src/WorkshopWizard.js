import React, { Component } from 'react'
import ActivityCard from './ActivityCard'
import Carousel from 'react-bootstrap/Carousel'

class WorkshopWizard extends Component {
    state = {
        activeIndex: 0
    }

    handleSelect = (selectedIndex) => {
        this.setState({ activeIndex: selectedIndex })
    }

    setNext = () => {
        var next = this.state.activeIndex + 1;
        console.log(next);
        this.handleSelect(next);
    }

    render() {
        var activeIndex = this.state.activeIndex;
        return (
            <section className="page-section bg-primary text-black mb-0">
                <div className="col-md-12">
                    <Carousel
                        activeIndex={activeIndex}
                        onSelect={this.handleSelect}
                        interval={null}
                        wrap="false">
                        {this.props.Activities.map((activity, index) => (
                            <Carousel.Item key={index}>
                                <ActivityCard
                                    Activity={activity}
                                    IsActive={(index === activeIndex) ? true : false}
                                    SetNext={this.setNext} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </section>
        )
    }

}

export default WorkshopWizard   