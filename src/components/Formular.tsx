/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import ExtraInformation from './ExtraInformation';
import Home from './Home';
import Position from './Position';
import Condition from './Condition';
import Success from './Success';

export default class Formular extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
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
  }

  prevStep = () => {
    const { step }: any = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step }: any = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input: any) => (e: { target: { value: any } }) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step }: any = this.state;
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
    }: any = this.state;
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
          <Position
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
    return 1;
  }
}
