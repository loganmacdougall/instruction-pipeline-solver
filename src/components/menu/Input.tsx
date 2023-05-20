import React, { useState } from 'react';
import { AssemblyLineInstruction } from '../../classes/instruction/AssemblyLineInstruction';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onInstructionChange: (instruction: AssemblyLineInstruction) => void;
}

export const Input: React.FC<InputProps> = ({ onInstructionChange, ...rest }) => {

  // Value is an empty string
  const [value, setValue] = useState('');

  // Function that is called when input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: AssemblyLineInstruction | '' = e.target.value as unknown as AssemblyLineInstruction;
    onInstructionChange(newValue); // Notify parent component of the value change
    console.log(newValue);
  };

  return (
    <div className="input-wrapper">
      <input {...rest} onChange={handleInputChange} />
    </div>
  );
};