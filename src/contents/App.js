/** @format */
import React, { Component } from "react";
import "./App.css";
import ListItems from "../compoments/ListItems";

export default class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };
  inputHandle = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  submitHandle = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteHandle = (key) => {
    const find = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: find });
  };

  updateHandle = (text, key) => {
    let items = this.state.items;
    items.map((item) => {
      return <div>if(item.key===key){(item.text = text)}</div>;
    });
  };

  render() {
    return (
      <div className='App'>
        <header>
          <form id='to-do-form' onSubmit={this.submitHandle}>
            <input
              type='text'
              placeholder='Enter a todo ...'
              value={this.state.currentItem.text}
              onChange={this.inputHandle}
            />
            <button type='submit'>Add</button>
          </form>
          <p>{this.state.items.text}</p>
          <ListItems
            newItems={this.state.items}
            deleteItem={this.deleteHandle}
            updateItems={this.updateHandle}
          />
        </header>
      </div>
    );
  }
}
