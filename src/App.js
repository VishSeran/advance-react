import { useState } from "react";
import "./App.css";
/*import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data = {desserts} />
    </div>
  );
}

export default App;
 */
/* import Todo from "./toDo.js";

function App() {
  const [todos, setTodo] = useState([
    {
      id: '001',
      createAt: "20.38"
    },
    {
      id: '002',
      createAt: '19.37'
    }
  ]);

  const [value, setValue] = useState("null");

  const handleChange = (e) => {
    setValue(e.target.value);
    
  }

  const reserveOrder = () => {
    setTodo([...todos].reverse());
  }

  return (
    <div>
      <button onClick={reserveOrder}>Reverse </button>

      <div>
        <table>
          <tbody>
            {todos.map((todo, index) => (

              <Todo key={todo.id} id={todo.id} createAt={todo.createAt} />

            ))}
          </tbody>
        </table>
      </div>

      <div>
        <form>
          <input value={value} onChange={handleChange} type="text" />
          
        </form>
      </div>
    </div>
  )

}

export default App; */

function App() {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log('form submitted!');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="nameField">
            <label> Name </label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button disabled={!name} type="submit"> Submit </button>
        </fieldset>
      </form>
    </div>
  )

}

export default App;