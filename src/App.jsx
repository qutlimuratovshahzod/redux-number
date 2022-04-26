import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, delete1, plus10, minus10, custom} from "./redux/actions"
function App() {
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector(state => state)

  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="">
          <h1 className="text-center display-1">{count}</h1>
          <div className="input-group mb-3">
            <input value={value} onChange={(event) => setValue(event.target.value)} className="form-control mb-2" type="number" />
            <button onClick={() => dispatch(custom(Number(value)))} className="btn btn-outline-warning">Custom</button>
          </div>
          <div className="btn-group">
           <button onClick={() => dispatch(minus10)} className="btn btn-lg  btn-outline-dark">-10</button>
            <button onClick={() => dispatch(decrement)} className="btn btn-lg  btn-outline-secondary">Decrement</button>
            <button onClick={() => dispatch(delete1)} className="btn btn-lg btn-outline-danger">delete</button>
            <button onClick={() => dispatch(increment)} className="btn btn-lg btn-outline-info">Increment</button>
            <button onClick={() => dispatch(plus10)} className="btn btn-lg btn-outline-success">+10</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
