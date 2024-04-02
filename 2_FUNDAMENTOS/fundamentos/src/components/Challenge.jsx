import { useState } from "react";

function Challenge() {

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [tot, setTot] =  useState()

    function handleClick() {
        setTot(Number(num1) + Number(num2))
    }

    return (
      <div>
         
        <h1>Add Two Numbers</h1>

        <div>
            Number 1: 
            <input type="text" name="num1" className="form-control" onChange={(event) =>
                {
                  setNum1(event.target.value)      
                }}>
            </input><br />
        </div>
        <div>
            Number 2:
            <input type="text" name="num2"  className="form-control" onChange={(event) =>
                {
                  setNum2(event.target.value)      
                }}>
            </input><br /> 
            <button onClick={handleClick}  className="btn">Click Me</button>
        </div>
         <div id="result">
            <strong>Result: </strong>
            {tot}
        </div>

      </div>

            
        
    );
            
}
  export default Challenge;