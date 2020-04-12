import React from 'react'
import Timer from './Timer'

const ActivityCard = props => {
    const activity = props.Activity
    const isActive = props.IsActive

    return (
        <div className="card mb-2">
            <img src={"assets/exercices/" + activity.GifPath + ".gif"} className="card-img-top" alt={activity.GifPath} />
            <div className="card-body">
                <h4 className="card-title text-center">{activity.Name}</h4>
                {isActive ? (
                    <h3 className="card-text text-center"><Timer Seconds={activity.Duration} SetNext={props.SetNext} /></h3>
                ) : (<span></span>)}

                {activity.hasOwnProperty('Incoming') ? (
                    <h4 className="card-text text-center">A venir : {activity.Incoming}</h4>
                ) : (<h4></h4>)}
            </div>
        </div>
    )
}

export default ActivityCard