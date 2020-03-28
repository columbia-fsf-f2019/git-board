import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    const res = await fetch('/api/todos');
    const todos = await res.json();
    console.log(`[DEBUG] App(cDM) todos :: ${JSON.stringify(todos, null, 2)}`);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Todoloo!</h1>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
