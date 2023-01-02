import { Component } from "react";
import taskData from "./taskData.js";
import "./todo.css";
export default class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      list: taskData,
    };
  }
  Add = () => {
    var task = document.getElementById("input").value;
    var priority = document.getElementById("priority").value;
    var value = 0;
    priority == "High"
      ? (value = 2)
      : priority == "Medium"
      ? (value = 1)
      : (value = 0);
    var obj = { task: task, priority: priority, value: value };
    this.setState({ list: [...this.state.list, obj] });
  };
  render() {
    return (
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Enter New Task</h3>
        <br></br>
        <input type="text" className="form-control" id="input"></input>
        <br></br>
        <h5 style={{ textAlign: "center" }}>
          Set Priority{" "}
          <select id="priority">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </h5>
        <br></br>
        <button className="btn btn-block btn-outline-info" onClick={this.Add}>
          Add Task
        </button>
        <br></br>
        <table className="table">
          <thead>
            <tr>
              <td>Sno</td>
              <td>Task</td>
              <td>Priority</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.list
              .sort((a, b) => b.value - a.value)
              .map((student, index) => {
                return (
                  <tr
                    className={`${
                      student.priority == "High"
                        ? "red"
                        : student.priority == "Medium"
                        ? "green"
                        : "gray"
                    }`}
                    style={{ color: "white" }}
                  >
                    <td>{index + 1}</td>
                    <td>{student.task}</td>
                    <td>{student.priority}</td>
                    <td>
                      <button className="btn btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
