import { useState } from "react";
const userDefaultInput={'current-savings':1000,
  'yearly-contribution':600,
'expected-return':7,
duration:4}
const UserInput=(props)=>{
    const [userInput,setUserInput]=useState(userDefaultInput)
    const submitHandler=(event)=>{
        event.preventDefault();
        props.onCalculate(userInput);
        console.log('submit',userInput)
    }
    const resetHandler=(event)=>{
        event.preventDefault();
        console.log('reset')
    }
    const inputChangeHandler=(inputId,value)=>{
setUserInput((prev)=>{
  return{
    ...prev,
    [inputId]:value,
}
    }
    )
    }
return(  <form className="form" onSubmit={submitHandler}>
<div className="input-group">
  <p>
    <label htmlFor="current-savings">Current Savings ($)</label>
    <input type="number" value={userInput["current-savings"]} id="current-savings"onChange={(event)=>{inputChangeHandler("current-savings",event.target.value)}} />
  </p>
  <p>
    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
    <input type="number" value={userInput["yearly-contribution"]} id="yearly-contribution" onChange={(event)=>{inputChangeHandler("yearly-contribution",event.target.value)}}/>
  </p>
</div>
<div className="input-group">
  <p>
    <label htmlFor="expected-return">
      Expected Interest (%, per year)
    </label>
    <input type="number" value={userInput["expected-return"]} id="expected-return" onChange={(event)=>{inputChangeHandler("expected-return",event.target.value)}}/>
  </p>
  <p>
    <label htmlFor="duration">Investment Duration (years)</label>
    <input type="number" id="duration"value={userInput["duration"]} onChange={(event)=>{inputChangeHandler("duration",event.target.value)}}/>
  </p>
</div>
<p className="actions">
  <button type="reset" className="buttonAlt" onClick={resetHandler}>
    Reset
  </button>
  <button type="submit" className="button">
    Calculate
  </button>
</p>
</form>)
}
export default UserInput;