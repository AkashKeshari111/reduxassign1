import logo from './logo.svg';
import './App.css';
import{ useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { DECREMENT, INCREMENT } from './store/action.type';
import { add, div, mul, subs } from './store/action';

function App() {
  //  const [count,setCount]=useState(0)

   const dispatch=useDispatch()
   const state=useSelector((state)=>state.count)
   const [value,setValue]=useState(0)

  return (
    <div className="App">
  

       <h1>Count: {state}</h1>

       <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} />
       <br/><br/>

       <button onClick={()=>dispatch(add(value))}>add</button>
       <button onClick={()=>dispatch(subs(value))}>sub</button>

       <button onClick={()=>dispatch(mul(value))}>mul</button>
       <button onClick={()=>dispatch(div(value))}>div</button>

    </div>
  );
}

export default App;
