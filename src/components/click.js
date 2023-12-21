import React, {Component} from 'react'
import FDetails from "./FDetails";
import Details from './Details'
import Collic from './Collic';


class F extends Component{
    constructor(){
      super()
      this.state = {
          FDetails : FDetails,
          flowers: [],
          counter: 0,
      }

      this.clickEvent = this.clickEvent.bind(this)
    }



    clickEvent() {
      if(this.state.counter < this.state.FDetails.length){
        this.state.flowers.push(this.state.FDetails[this.state.counter]);
        this.setState(function(prevState){
          return {counter: prevState.counter+1}
        })
        console.log(this.state.flowers);

        this.newFlowers = this.state.flowers.map(flowers =>{
          return <Details
            key={flowers.id}
            img={flowers.img}
            name={flowers.name}
            description={flowers.description}
            season={flowers.season}
          />
        })
      }
    }
    render() {
        return(
            <div className="row">
              <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Reveal!</button>

              {this.newFlowers}
            </div>
        )
    }
}
export default Collic;

//
