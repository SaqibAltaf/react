import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

   

    render() {
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label>Email address</label>
                            <input type="text" className="form-control"  value={this.props.email} name="email" onChange={e =>this.props.onChange(e)} placeholder="Enter email"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label>Name</label>
                            <input type="text" className="form-control" value={this.props.name} name="name" onChange={e => this.props.onChange(e)}  placeholder="Enter Name"></input>
                        </div>

                    </div>
                    <button className="btn btn primary" onClick ={(e) =>this.props.onSubmit(e)}>Submit</button>
                </form>
            </div>
        );
    }
}

// User.propTypes = {};

export default User;
