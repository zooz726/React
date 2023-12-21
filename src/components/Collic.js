import React, {Component} from "react";
import FDetails from "./FDetails";
import Details from "./Details";

class Collic extends Component {

  constructor() {
    super()
    this.state = { FDetails :  FDetails }
  }

  clickEvent(){
    console.log(FDetails[0])
  }

  mapping(x){
    const flowers = x.map(flowers => 
      <FDetails
        key={flowers.id}
        img={flowers.img}
        name={flowers.name}
        description={flowers.description}
        season={flowers.season}
      />);
    return flowers
  }

  

  render(){
    return (
      <div className="row">
        <button className="btn btn-primary" onClick={this.clickEvent}>Click Here!</button>
        {this.mapping(this.state.FDetails)}
      </div>
    )
  }
}

export default Collic;
