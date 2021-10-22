import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App()
{
 
  const [invalue, setval] = useState('')
 
let addarrr = ["yousuf","nasir","ss"]

const addItem = () => {
  var  aa = invalue;
 return aa
}
// let ae  = aa;



addarrr.push(aa)



  return (
    <div className="App">
      
      <h2>{invalue}</h2>
      <input onChange={(e)=>setval(e.target.value)} />
    
      <button onClick={addItem} >Add</button>
     <h3>{addarrr}</h3>
     <ul>
     {addarrr.map((addarr) => {
          return <li key={addarr}>{addarr} </li>
        })}
      </ul>
    </div>
  );

  }
export default App;
