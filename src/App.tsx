import './styles/App.css';
import React, {useState} from 'react'
import {InstructionMenu, Option}  from './components/menu/Instruction_menu';
import {Input} from './components/menu/Input';

const options: Option[] = [
  { value: "add", label: "ALU" },
  { value: "dadd", label: "ALUi" },
  { value: "daddi", label: "LOAD" },
  { value: "daddui", label: "STORE" },
  { value: "and", label: "COND" },
  { value: "or", label: "JUMP" }
];

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className="App">
      <InstructionMenu placeHolder={"Select..."} options={options}/>
      <Input label={inputValue} onInputChange={handleInputChange}/>
    </div>
  );
}

export default App
