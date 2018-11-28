import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      results: {}
    };
  }

  _updateInputvalue = e =>
    this.setState({
      inputValue: e.target.value
    });

  _doRequest = () => {
    axios
      .get(`https://vat.erply.com/numbers?vatNumber=${this.state.inputValue}`)
      .then(response => {
        this.setState({ results: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <label>
          VAT number:
          <input
            type="text"
            name="vat"
            value={this.state.inputValue}
            onChange={e => this._updateInputvalue(e)}
          />
        </label>
        <button onClick={this._doRequest}>CLICK</button>

        {this.state.results && (
          <div>
            <p>{this.state.results.CountryCode}</p>
            <p>{this.state.results.VATNumber}</p>
            <p>{this.state.results.RequestDate}</p>
            <p>{this.state.results.Valid}</p>
            <p>{this.state.results.Name}</p>
            <p>{this.state.results.Address}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
