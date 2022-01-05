import React from "react";

class InputField extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <input
          type="text"
          onChange={this.props.handlerTextBox}
          value={this.props.groceryListItem}
        />
        <button onClick={this.props.handlerClick}>Add</button>
      </div>
    );
  }
}

export default InputField;
