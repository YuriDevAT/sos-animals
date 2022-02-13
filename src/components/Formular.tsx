import ExtraInformation from './ExtraInformation';
import Home from './Home';
import Location from './Location';
import Condition from './Condition';
import Success from './Success';
import React from 'react';

export default class Formular extends React.Component {
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
    unknown: '',
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input: any) => (e: { target: { value: any } }) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      one,
      two,
      more,
      type,
      small,
      middle,
      large,
      when,
      position,
      good,
      anxious,
      aggressive,
      wounded,
      unknown,
    } = this.state;
    const values = {
      one,
      two,
      more,
      type,
      small,
      middle,
      large,
      when,
      position,
      good,
      anxious,
      aggressive,
      wounded,
      unknown,
    };

    switch (step) {
      case 1:
        return <Home nextStep={this.nextStep} />;
      case 2:
        return (
          <Condition
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ExtraInformation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Location
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
    }
  }
}
