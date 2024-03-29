import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
  };

  handleDecrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
  };

  handleDelete = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            OnIncrement={this.handleIncrement}
            OnDecrement={this.handleDecrement}
            OnDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
