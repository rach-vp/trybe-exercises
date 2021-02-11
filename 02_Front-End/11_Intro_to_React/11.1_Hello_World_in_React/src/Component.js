import { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <li>{this.props.value}</li>
    );
  }
}

export default Task;