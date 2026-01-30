
import './App.css';
import { useEffect, useState } from 'react';

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
    </div>
  )
}

export default App;
