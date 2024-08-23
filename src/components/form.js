import { useState } from 'react'

function Form( {pushNewData} ) {
  
  const [checkboxes, setCheckboxes] = useState({})
  const [inputValue, setInputValue] = useState('')

  const handleCheckboxChange = (e) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked
    })
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const sendForm = () => {
    pushNewData(inputValue)
  }

  return (
    <div className="form">

      <div>
        <input 
          type="text"
          name="inputData"
          placeholder='input data here'
          className='inputTxt'
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div>
        <input 
          type="checkbox" 
          name="first"
          checked={checkboxes.first || false} 
          onChange={(e) => handleCheckboxChange(e)} 
          className='inputCheck'
        /> 
        First
        
      </div>

      <div>
        <input 
          type="checkbox" 
          name="second"
          checked={checkboxes.second || false} 
          onChange={(e) => handleCheckboxChange(e)} 
          className='inputCheck'
        />
        Second
      </div>

      <div className='btn'>
        <button onClick={sendForm}> Send Form </button>
      </div>
    </div>
  );
}

export default Form;
