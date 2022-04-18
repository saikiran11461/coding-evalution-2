import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import {useState} from "react"

function App() {
  const [state, setState] = useState(true)


  const changeFn = () => {
    setState(!state)
  }
  return (
    <div className="App">
      <button onClick={changeFn} className="togglebtn">togglebtn</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {state? <ShowStudents/>: <AddStudent/>}
    </div>
  );
}

export default App;