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

//exercise for controlled form with fieldset
/* function App() {

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

export default App; */

//exercise to create a feedback form in little lemon resturant

/* function App() {

  const [score, setScore] = useState("10")
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length < 10) {
      alert("please explain why is your rating is low");
      return;
    }

    console.log('form submitted!');
    setScore('10');
    setComment("");

  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="field">
            <label> Score: {score} </label>
            <input
              type="range"
              min={0}
              max={10}
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>

          <div className="field">
            <label> Comment here: </label>
            <textarea value={comment} onChange={e => setComment(e.target.value)} />
          </div>

          <button type="submit"> Submit </button>
        </fieldset>
      </form>
    </div>
  )
}

export default App; */

//import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return true;
  };

  const clearForm = () => {
    // Implement this function
  };

  const handleSubmit = (e) => {

    if (password.value.length > 8) {
      PasswordErrorMessage();
    } else {
      alert("Account created!");
      clearForm();
      e.preventDefault();
    }

  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password" type="password" value={password.value} onChange={(e) => {
              setPassword({
                ...password,
                value: e.target.value
              })
            }} onBlur={(e) => setPassword({
              ...password,
              isTouched: true
            })
            }
            />
            <div>
              {password.value.length < 8 && (
                <PasswordErrorMessage />
              )}
            </div>

          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
