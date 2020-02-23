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

    if (input.length % 3 === 0) {
      this.props.setSearchQuery(input);
    }
  };

  handleOnClick = option => {
    console.log(option);
    this.setState({
      selectedIndex: 0,
      filteredOptions: [],
      inputVal: option.title,
      showOptions: false
    });
    this.props.getSelectedOption(option);
  };

  handleKeyDown = e => {
    const { selectedIndex, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        selectedIndex: 0,
        inputVal: filteredOptions[selectedIndex]
      });
    } else if (e.keyCode === 38) {
      if (selectedIndex === 0) {
        return;
      }
      this.setState({ selectedIndex: selectedIndex - 1 });
    } else if (e.keyCode === 40) {
      if (selectedIndex === filteredOptions.length - 1) {
        console.log(selectedIndex);
        return;
      }
      this.setState({ selectedIndex: selectedIndex + 1 });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.clearForm !== this.props.clearForm && nextProps.clearForm) {
      this.setState({ inputVal: "" });
    }
    return true;
  }

  //   handleOnBlur = event => {
  //     this.setState({ showOptions: false });
  //   };

  //   componentDidMount() {
  //     this.searchBox.current.focus();
  //   }

  loadOptions = () => {
    let optionList;
    const { options } = this.props;
    if (options && options.length > 0) {
      optionList = (
        <div className="options-dropdown">
          {options.map((option, index) => (
            <div
              key={index}
              className={
                index === this.state.selectedIndex
                  ? "option-active option"
                  : "option"
              }
              onClick={() => this.handleOnClick(option)}
            >
              {option.title}
            </div>
          ))}
        </div>
      );
    } else {
      optionList = (
        <div className="no-options options-dropdown">No Options !!</div>
      );
    }
    return optionList;
  };

  render() {
    const { inputVal, showOptions } = this.state;
    let optionList = this.loadOptions();
    return (
      <div className="autocomplete-searchbox">
        <input
          type="text"
          className="search-box"
          onChange={this.handleOnChange}
          onKeyDown={this.handleKeyDown}
          value={inputVal}
          ref={this.searchBox}
          placeholder="input search eg. Don"
        />
        {showOptions && inputVal.length > 0 ? optionList : null}
      </div>
    );
  }
}

export default AutoComplete;
