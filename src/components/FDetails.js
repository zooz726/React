import React, {Component} from "react";

class FDetails extends Component{

    render(){
        return(
            <div className="col-md-4 col-sm-6">
            <div className="card">
                <div className="card-header" style={{ overflow: 'hidden' }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={this.props.img} alt="" />
                </div>
                <div className="card-body">
                <h2> {this.props.name}</h2>
                <h5>{this.props.position}</h5>
                <div>{this.props.Description}</div>
                <div>{this.props.season}</div>
                </div>
            </div>
            </div>

        )
    }
}

export default FDetails