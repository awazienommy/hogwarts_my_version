import React, { Component } from 'react'

class Hogtile extends Component {
    slugitOut = (name) =>{
        return name.split(" ").join("_").toLowerCase()
    }

    state = {
        clicked: false
    }

    handleOnClick = () =>{
       this.setState({
           clicked: !this.state.clicked
       })
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h3>{this.props.hog.name}</h3>
                <img onClick={this.handleOnClick} src={`/hog-imgs/${this.slugitOut(this.props.hog.name)}.jpg`}></img>
               {
                   this.state.clicked ?
                   <div>
                        <p>Weight: {this.props.hog.weight}</p>
                        <p>Specialty: {this.props.hog.specialty}</p>
                        <p>Greased Status: {this.props.hog.greased ? 'Greased' : 'Not Greased'}</p>
                   </div>

                   :

                   null


               }
            </div>

        )
    }
}

export default Hogtile
