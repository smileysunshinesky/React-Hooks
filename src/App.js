// import logo from './logo.svg';
import './App.css';
import StateFromFn from './StateFromFn';
import UseState from './UseState'; // Import the UseState component
// import ObjectState from './ObjectState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState /> {/* Display the UseState component */}
        {/* <ObjectState /> */}
        <StateFromFn />
      </header>
    </div>
  );
}

export default App;