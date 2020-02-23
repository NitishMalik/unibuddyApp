import React from "react";
import "./styles.scss";
import AutoComplete from "../../components/autocomplete";
import Increment from "../../components/increment";

class Search extends React.Component {
  state = {
    noOfOptions: 3,
    searchQuery: "",
    selectedOption: null
  };
  handleOnSubmit = () => {
    this.props.addBook(this.state.selectedOption.id);
  };

  setSearchQuery = inputValue => {
    this.setState({ searchQuery: inputValue });
    this.props.getOptions(inputValue, this.state.noOfOptions);
  };

  incrementNumber = () => {
    this.setState((prevState, prevProps) => ({
      noOfOptions: prevState.noOfOptions + 1
    }));
  };

  decrementNumber = () => {
    this.setState((prevState, prevProps) => ({
      noOfOptions: prevState.noOfOptions - 1
    }));
  };

  getSelectedOption = option => {
    console.log(option);
    this.setState({ selectedOption: option });
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="form-container">
        <IncrementControl
          incrementNumber={this.incrementNumber}
          decrementNumber={this.decrementNumber}
          noOfOptions={this.state.noOfOptions}
        />
        <AutoCompleteSearchBox
          setSearchQuery={this.setSearchQuery}
          options={this.props.options}
          getSelectedOption={this.getSelectedOption}
        />
        <input type="submit" className="search-btn" />
      </form>
    );
  }
}

export default Search;
