import React from 'react';
import classnames from 'classnames';

export default class TodoEdit extends React.Component {
  static propTypes = {
    onSave: React.PropTypes.func.isRequired,
    text: React.PropTypes.string,
    editing: React.PropTypes.bool,
    newTodo: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input
        className={classnames({
          'edit': this.props.editing,
          'new-todo': this.props.newTodo,
        })}
        type='text'
        placeholder="Add Todo"
        autoFocus='true'
        value={this.state.text}
        onBlur={::this.handleBlur}
        onChange={::this.handleChange}
        onKeyDown={::this.handleSubmit} />
    );
  }
}
