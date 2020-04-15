import React from 'react'

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#" onClick={props.GoBackToStartPage.bind(null)}>Roro's Workout</a>
            </div>
            <br />
        </nav>
    )
}

export default Header