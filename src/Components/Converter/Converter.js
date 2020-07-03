import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import "./Converter.css";
class Converter extends Component {
  state = {
    currencies: ["USD", "CHF", "EUR"],
    base: "USD",
    amount: "",
    convertTo: "EUR",
    result: "",
    date: "",
  };

  handleSelect = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null,
      },
      this.calculate,
    );
  };

  handleInput = (e) => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null,
      },
      this.calculate,
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then((res) => res.json())
        .then((data) => {
          const date = data.date;
          const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
          this.setState({
            result,
            date,
          });
        });
    }
  };

  handleSwap = (e) => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null,
      },
      this.calculate,
    );
  };
  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;

    return (
      <div className="container">
        <div className="row">
          <form className="form">
            <input
              type="number"
              value={amount}
              onChange={this.handleInput}
              className="input"
              placeholder="Amount"
            />
            <select
              name="base"
              value={base}
              onChange={this.handleSelect}
              className="form-1"
            >
              {currencies.map((currency) => (
                <option>{currency}</option>
              ))}
            </select>
            <div className="form-3">
              <p onClick={this.handleSwap} className="swap">
                <FontAwesomeIcon icon={faSyncAlt} color="red" />
              </p>
            </div>
            <select
              name="convertTo"
              value={convertTo}
              onChange={this.handleSelect}
              className="form-2"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="result">
          <h5>
            {amount} {} {base} equevalent to
          </h5>
          <h2>
            {result === null ? "Calculating..." : result} {convertTo}
          </h2>
          <p>As of {date}</p>
        </div>
      </div>
    );
  }
}

export default Converter;
