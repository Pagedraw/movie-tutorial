import React, { Component } from 'react';

import PagedrawnTextInput from './pagedraw/_submittableinput'

export default class SubmittableTextInput extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.value);
    this.setState({value: ''});
  }

  handleKeyDown = e => {
    if (e.which === 13) {
        this.handleSubmit();
    }
  }

  handleChange = e => this.setState({value: e.target.value})

  render() {
    return <PagedrawnTextInput value={this.state.value} onChange={this.handleChange} onClick={this.handleSubmit} onKeyDown={this.handleKeyDown} />
  }
}

