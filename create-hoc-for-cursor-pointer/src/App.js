
import './App.css';
import { useEffect, useState } from 'react';
import { DessertCount, DrinkCount } from './counts';

const withMousePosition = (WrappedComponent) => {

  return (props) => {

    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0
    });

    useEffect(() => {

      const handleMousePositionChange = (e) => {

        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });

      }
      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      }
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  }
}

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;

  return (
    <div>
      <h3>Mouse Position</h3>

      <div className='paneldiv'>
        <span className='panelSpan'>X: {mousePosition.x}</span>
        <span className='panelSpan'>Y: {mousePosition.y}</span>
      </div>
    </div>
  )
}


const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;

  return (

    <div>
      <h3>Mouse Position</h3>
      <p className='panelSpan'>
        ({mousePosition.x}, {mousePosition.y});
      </p>
    </div>


  )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {


  return (
    <div className='App'>
      <h1>Mouse Position Tracker</h1>

      <PanelMouseTracker />
      <PointMouseTracker />

      <DessertCount />
      <DrinkCount />
    </div>
  )
}

export default App;

//below code show how to do above logic in render props

/* import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render({mousePosition})
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  return (

    <div>
      <MousePosition render={({mousePosition}) => (
      <div>
      <h3>Mouse Position</h3>

      <div className='paneldiv'>
        <span className='panelSpan'>X: {mousePosition.x}</span>
        <span className='panelSpan'>Y: {mousePosition.y}</span>
      </div>
    </div>
  )}/>
    </div>
    
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  return (
  
  <MousePosition render={({mousePosition}) => (
    <div>
      <h3>Mouse Position</h3>
      <p>({mousePosition.x}, {mousePosition.y})</p>
    </div>
  )} />
)
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
 */