import "./App.css";
import Data from "./components/Data";
import Event_Handling from "./components/Event_Handling";
import Person from "./components/Person";

function App() {
  return (
    <>
      <Data name="John Doe" age={30} isMarried={true} />
    </>
  );
}

export default App;
