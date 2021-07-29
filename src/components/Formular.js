import React, { Component } from 'react';
import Condition from './Condition';
import Contact from './Contact';
import Home from './Home';
import Location from './Location';
import ReportAnimal from './ReportAnimal';
import Success from './Success';

export default class Formular extends Component {

    state = {
        step: 1,
        whoNeedsHelp: '',
        typeOfDog: '',
        sizeOfDog: '',
        whenSeen: '',
        position: '',
        condition: '',
        name: '',
        number: '',
        email: ''
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

     render() {
        const { step } = this.state;
        const { whoNeedsHelp, typeOfDog, sizeOfDog, whenSeen, position, condition, name, number, email } = this.state;
        const values = { whoNeedsHelp, typeOfDog, sizeOfDog, whenSeen, position, condition, name, number, email }
        
        switch (step) {
            case 1:
                return (
                    <Home
                    nextStep={ this.nextStep }
                    />)
            case 2:
                return (
                <ReportAnimal
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
                />)
            // case 3:
            //     return (
            //     <Location
            //     prevStep={ this.prevStep }
            //     nextStep={ this.nextStep }
            //     handleChange={ this.handleChange }
            //     values={ values }
            //     />)
            case 3:
                return (
                <Condition
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
                />)
            case 4:
                return (
                <Contact
                prevStep= { this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
                />)
            case 5:
                return (
                <Success 
                />
                )
            default:
        }
    }
}