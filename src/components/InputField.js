import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <div>
        <input
          className="shopping-list-input"
          type="text"
          onChange={this.props.handlerTextBox}
          placeholder="Add a grocery item"
          value={this.props.groceryListItem}
        />
        <button className="primary-btn" onClick={this.props.handlerClick}>
          Add
        </button>
      </div>
    );
  }
}

export default InputField;
