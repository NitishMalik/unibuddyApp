import React from "react";
import "./styles.scss";
//import PropTypes from "prop-types";

class AutoComplete extends React.Component {
  //   static propTypes = {
  //     options: PropTypes.instanceOf(Array).isRequired
  //   };

  constructor(props) {
    super(props);
    this.searchBox = React.createRef();
  }

  state = {
    inputVal: "",
    filteredOptions: [],
    selectedIndex: 0,
    showOptions: false
  };

  handleOnChange = event => {
    const input = event.target.value.trim();
    this.setState({ inputVal: input, showOptions: true });

    // call redux action
  };

  handleOnClick = event => {
    // to be implemented
  };

  handleKeyDown = e => {
    // to be implemented
  };

  handleOnBlur = event => {
    this.setState({ showOptions: false });
  };

  componentDidMount() {
    this.searchBox.current.focus();
  }

  render() {
    const { inputVal, showOptions } = this.state;
    const { options } = this.props;
    if (options && options.length > 0) {
      optionList = (
        <div className="options-dropdown">
          {options.map((option, index) => {
            return (
              <div
                className={
                  index === this.state.selectedIndex
                    ? "option-active option"
                    : "option"
                }
                key={index}
                onClick={this.handleOnClick}
              >
                {option.title}
              </div>
            );
          })}
        </div>
      );
    } else {
      optionList = (
        <div className="no-options options-dropdown">No Options !!</div>
      );
    }
    return (
      <div className="autocomplete-searchbox">
        <input
          type="text"
          className="search-box"
          onChange={this.handleOnChange}
          onKeyDown={this.handleKeyDown}
          value={inputVal}
          onBlur={this.handleOnBlur}
          ref={this.searchBox}
          placeholder="input search eg. Don"
        />
        {showOptions && inputVal.length > 0 ? optionList : null}
      </div>
    );
  }
}

export default AutoComplete;
