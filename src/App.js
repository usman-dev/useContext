import "./App.css";
import AppState from "./context/AppState";
import TestContext from "./component/TestContext";
import SecondContext from "./component/newComponent/SecondContext";

function App() {
  return (
    <>
    <AppState>
      <div>
        <h1>This is a context testing</h1>
      </div>
      <TestContext/>
      <SecondContext/>
      </AppState>
    </>
  );
}

export default App;
