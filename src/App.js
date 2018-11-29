import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      results: null,
      loading: false,
      error: false
    };
  }

  _updateInputvalue = e =>
    this.setState({
      inputValue: e.target.value
    });

  _getData = e => {
    this.setState({ loading: true });
    e.preventDefault();
    axios
      .get(`https://vat.erply.com/numbers?vatNumber=${this.state.inputValue}`)
      .then(response => {
        this.setState({ results: response.data, loading: false, error: false });
      })
      .catch(error => {
        // handle error
        console.log(error);
        this.setState({
          error: true,
          loading: false
        });
      });
  };

  render() {
    return (
      <div className="app-container">
        <Header title="VAT Number Check" />
        <Form
          value={this.state.inputValue}
          onChange={e => this._updateInputvalue(e)}
          onClick={e => this._getData(e)}
          disabled={!this.state.inputValue}
          loading={this.state.loading}
        />
        <Results
          error={this.state.error}
          loading={this.state.loading}
          results={this.state.results}
        />
      </div>
    );
  }
}

export default App;
