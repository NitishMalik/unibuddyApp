import React from "react";
import "./styles.scss";
import AutoComplete from "../../components/autocomplete";
import Increment from "../../components/increment";
import { getOptions } from "../../redux/search/searchActions";
import { addBook } from "../../redux/book/bookActions";
import { connect } from "react-redux";
import { selectSearchOptions } from "../../redux/search/searchSelector";

class Search extends React.Component {
  state = {
    noOfOptions: 3,
    searchQuery: "",
    selectedOption: null,
    clearForm: false
  };
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBook(this.state.selectedOption.id);
    this.setState({ clearForm: true });
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
        <Increment
          incrementNumber={this.incrementNumber}
          decrementNumber={this.decrementNumber}
          noOfOptions={this.state.noOfOptions}
        />
        <AutoComplete
          setSearchQuery={this.setSearchQuery}
          options={this.props.options}
          getSelectedOption={this.getSelectedOption}
        />
        <input type="submit" className="search-btn" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  options: selectSearchOptions(state)
});

const mapDispatchToProps = dispatch => ({
  getOptions: (query, numbOfResults) =>
    dispatch(getOptions(query, numbOfResults)),
  addBook: id => dispatch(addBook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
