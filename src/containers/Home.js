import React from 'react';
import PropTypes from 'prop-types';
import "./Home.css";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="Home">
                <div className="lander">
                    <h1>Scratch</h1>
                    <p>A simple note taking app</p>
                </div>
            </div>
            </React.Fragment>
            
        );
    }
}

// ComponentName.propTypes = {};

export default Home;
