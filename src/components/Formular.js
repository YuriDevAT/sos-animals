import React, { Component } from 'react';
import Condition from './Condition';
import Home from './Home';
import Location from './Location';
import ReportAnimal from './ReportAnimal';
import Success from './Success';

export default class Formular extends Component {

    state = {
        step: 1,
        one: '',
        two: '',
        more: '',
        type: '',
        small: '',
        middle: '',
        large: '',
        when: '',
        position: '',
        good: '',
        anxious: '',
        aggressive: '',
        wounded: '',
        unknown: ''
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
        const { one, two, many,
                type, small, middle, large,
                when, position,
                good, anxious, aggressive, wounded, unknown,
                } = this.state;
        const values = { one, two, many,
                type, small, middle, large,
                when, position,
                good, anxious, aggressive, wounded, unknown,
                }
        
        switch (step) {
            case 1:
                return (
                    <Home
                    nextStep={ this.nextStep }
                    />
                )
            case 2:
                return (
                    <ReportAnimal
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    />
                )
            case 3:
                return (
                    <Location
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    />
                )
            case 4:
                return (
                    <Condition
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    />
                )
            case 5:
                return (
                    <Success />
                )
            default:
        }
    }
}