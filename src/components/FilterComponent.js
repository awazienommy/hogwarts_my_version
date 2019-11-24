import React, { Component } from 'react'

class FilterComponent extends Component {
    // console.log(props)
    render() {
        return (
            <div>
                <button onClick={this.props.toggleGreasedStatus}>Greased</button>
                Sort: <button> sort</button> 
            </div>
        )
    }
}

export default FilterComponent
