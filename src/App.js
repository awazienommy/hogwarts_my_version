import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Hoglist from './components/Hoglist'
import hogs from './porkers_data'
import FilterComponent from './components/FilterComponent'



class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      greasedStatus: false
    }
    // this.toggleGreasedStatus = this.toggleGreasedStatus.bind(this)
    // this.filterHogs = this.filterHogs.bind(this)
  }
  
  toggleGreasedStatus = () =>{
    console.log('clicked')
    this.setState({
      greasedStatus: !this.state.greasedStatus
    })
  }

  filterHogs = (hogs) => {
    if(!!this.state.greasedStatus){
     return hogs.filter(hog => hog.greased) 

    } else {
      return hogs
    }
  }

  
  render() {
    return (
      <div>
        < Nav />
        <FilterComponent toggleGreasedStatus={this.toggleGreasedStatus}/>
        < Hoglist hogs={this.filterHogs(hogs)}/> 

      </div>
    )
  }
}

export default App

