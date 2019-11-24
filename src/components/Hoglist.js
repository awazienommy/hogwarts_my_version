import React, { Component } from 'react'
import Hogtile from './Hogtile'
import hogs from '../porkers_data'

export default class Hoglist extends Component {

    
    render() {

        return (
            <div>
                {
                hogs.map(hog => {
                   return  <Hogtile hog={hog}/>
                })
                
                }
            </div>
        )
    }
}

