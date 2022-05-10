import React, { Component } from 'react'
import './galeries.css'
import familles from '../data/families.json'
import FamilyGallery from './familyGallery'


class Galeries extends Component {

    constructor() {
        super();
        
        this.state = {
            familles : []
        }
        
    }

    
    componentDidMount() {
        /*
        fetch('/data/families.json')
        .then(res => res.json())
        .then( families => this.setState({families}, ()=>console.log('fetched families..', families) ));
    //        .then( families => this.setState({families}) );
    */
    this.setState({familles});
    }


    render() {
            return (
            // this.state.familles.map(family => <div key={family.family} >{family.label}</div> )
             this.state.familles.map(family => <FamilyGallery key={family.family} family={family.family} label={family.label}></FamilyGallery>)
            )
    }
}
export default Galeries;