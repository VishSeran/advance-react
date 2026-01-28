
import { act, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import { UserProvider, useUser } from "./userContext.js";
import { type } from "@testing-library/user-event/dist/type/index.js";
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

/* import { validateEmail } from "./utils";

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
    if (
      firstName.length > 0 &&
      email.length > 0 &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role != 'role') {
      return true;
    } else {
      return false
    }



  };

  const clearForm = () => {
    // Implement this function

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword({
      value: '',
      isTouched: false
    });
    setRole('role');
  };

  const handleSubmit = () => {
    alert("Account created!");
    clearForm();
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
 */

/* const LoggedUser = () => {

  const {user} = useUser();
  return (
    <p>
      Hello <span className="user">{user.name}</span>
    </p>
  )

}

const Header = () => {
  return (
    <header>
      <h1>The Daily Blog App </h1>
    </header>

  )
}

const Page = () => {

  const {user} = useUser();
  return (
    <div>
      <h2>The Private Issues in AI</h2>

      <div>
        <p>
          Artificial Intelligence raises serious **privacy concerns** because it relies heavily on large volumes of personal data to function effectively. AI systems often collect, analyze, and store sensitive information such as biometric data, location history, online behavior, medical records, and personal communications. This creates risks of data misuse, unauthorized access, surveillance, and identity theft, especially when data is stored in centralized systems or handled by third-party services. Many users are unaware of how their data is collected or how long it is retained, leading to a lack of informed consent and transparency. When AI models are trained on personal data without proper anonymization, individuals can be re-identified, making privacy protection even more difficult.

          Another major issue is **data ownership and control**, where individuals lose authority over their personal information once it is processed by AI systems. Companies and organizations may use personal data for purposes beyond the original intent, such as targeted advertising, behavioral prediction, or profiling, without clear user permission. This can lead to discrimination, manipulation, and digital exploitation, especially when AI systems infer sensitive attributes like political views, mental health conditions, or financial status. Without strong regulations, ethical standards, and technical safeguards like encryption and differential privacy, AI can become a tool for mass surveillance and social control rather than human empowerment. Protecting privacy in AI requires strong legal frameworks, transparent data practices, and privacy-by-design system architectures.

        </p>
      </div>

      <div>
        <h3>Authored by user {user.name}</h3>
      </div>
    </div>

  )
}

function App() {
  return (

    <div>
      <Header />
      <LoggedUser />
      <Page />
    </div>

  )
} */



/* function Root () {
  return <UserProvider> <App /> </UserProvider>
}

export default Root; */

/* import React, { useState } from "react";

function App() {

  const [greeting, setGreeting] = useState({
    greet: "Welcome to Heaven",
    time: 7

  });

  const updateGreet = () => {
    setGreeting((prevState) =>{
      return {...prevState, greet:"let's begin"}
    })
  }

  function increaseTime(){
    setGreeting((prevState)=>{
      return {...prevState, time: 50}
    })
  }



  return (
    <div>
      <h1>hello user, {greeting.greet}. Your vacation is {greeting.time} years </h1>
      <button onClick={updateGreet}>Change Greeting</button>
      <button onClick={increaseTime}> Increase Time</button>
    </div>
  )
}
export default App; */

/* import React, { useEffect, useState, version } from "react";

function GoalForm(props) {

  const [formData, setFormData] = useState({
    goal: "",
    by: ""
  });

  const [toggle, setToggle] = useState(false);




  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(formData);
    console.log(`goal: ${formData.goal} \nby: ${formData.by}`)
    setFormData({ goal: "", by: "" });

  }

  function submitHandler() {
    setToggle(!toggle);
  }

  useEffect(() => {
     document.title =  toggle? "Submitted!" : "Goal Form"
  },[toggle])


  return (
    <div>
      <h1>Goal form </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="goal">Set your goal: </label>
          <input name="goal" type="text" value={formData.goal} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="by">Set your by: </label>
          <input name="by" type="text" value={formData.by} onChange={handleChange} />
        </div>

        <button onClick={submitHandler}> Submit </button>
      </form>

    </div>


  )
}

function ListofGoals(props) {

  return (
    <ul>
      {
        props.goalArray.map((goal) => (
          <li key={goal.goal}>
            <span>My goal is to {goal.goal}, by {goal.by} </span>
          </li>
        ))
      }
    </ul>
  );
}

function App() {

  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListofGoals goalArray={allGoals} />

    </div>
  )
}

export default App; */

/* import react, { useEffect, useState } from "react";


function App() {
  const [user, setUser] = useState([]);

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data));
  }

  useEffect(() => {
    fetchUser();
  }, [])


  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data Fetched</h1>
      <h3>first name: {user.results[0].name.first}</h3>
      <h3>last name: {user.results[0].name.last}</h3>
    </div>
  ) : (
    <h1>Data processing</h1>
  );
}

export default App; */

/* function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Customer Data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.medium} />
    </div>
  ) : (
    <h1>Data Processing</h1>
  )
}
export default App; */



/* export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    /* setGiftCard({
      ...giftCard,
      text: "Your coupon has been used.",
      valid: false,
      instructions: "Please visit our restaurant to renew your gift card."
    }) */

      /*
      setGiftCard((prevState) => {
        return {...prevState, text:"Your coupon has been used.",
          valid: false,
          instructions: "Please visit our restaurant to renew your gift card."
        }
      })
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
} */

//useReducer hook - when there have complex state logics with multiple sub-values or the next state
//depend on the previous state we use useReducer to handle such situations

/* useReducer like super powered useState.
useState get initial state, but useReducer get a reducer function and an initial state
 */


/* const reducer = (state, action) => {
  if(action.type === 'transport') return {money:state.money -45}
  if(action.type === 'group') return { money: state.money + 120}
  if (action.type === 'individual') return{money: state.money + 500}
}

function App () {

  const initialState = {money: 100}
  
  //useReducer initiate
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
      <h1>
        Wallet Tracker
      </h1>

      <div>
        wallet money: {state.money}
      </div>

      <button onClick={()=> dispatch({type:'transport'})}>Transport</button>
      <button onClick={()=> dispatch({type:'group'})}>Group Class</button>
      <button onClick={() => dispatch({type: 'individual'})}>Individual Class</button>
    </div>
  )
}
export default App;
 */

/*
useState - Store data that affects what you see on the screen
When state changes ➜ component re-renders
*/ 

//useRef- its accessign the Dom and Store data that does NOT need to re-render the UI
//Accessing DOM elements



function App(){

  const formInputRef = useRef(null)
  const focusInput = () => {
    formInputRef.current.focus();
  }

  return(
    <div>
      <h1>Using useRef hook to access to underlying DOM</h1>
      <button onClick={focusInput}>Focus Input</button>
      <input ref={formInputRef} type="text"/>
    </div>
  )
}
export default App;