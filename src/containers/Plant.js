import React from 'react';
import PropTypes from 'prop-types';
import "./Home.css";
class Plant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
renderData(){
    return this.props.match.params.data;
}
    render() {
        return (
            <React.Fragment>
                <div className="Home">
                <div className="lander">
                    <h1>Pant</h1>
                    <p>A simple note taking app {this.renderData()}</p>
                </div>
            </div>
            {/* <div>{this.props.test}</div> */}
            </React.Fragment>
            
        );
    }
}

// ComponentName.propTypes = {};

export default Plant;
