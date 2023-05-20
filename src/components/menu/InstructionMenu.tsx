import React, { useEffect, useState } from "react";
import "./instruction_menu.css";
import {AssemblyLineInstruction, AssemblyLineLabels} from "../../classes/instruction/AssemblyLineInstruction" 
import {Input} from './Input'

// Expecting Props 
interface InstructionMenuProps {
  placeHolder?: string;
}

// Exporting Components
export const InstructionMenu: React.FC<InstructionMenuProps> = ({
  placeHolder,
}) => {

  // Variables for INPUT
  const [output, setOutput] = useState<React.ReactNode>();

  const renderInputs = (instruction: AssemblyLineInstruction | -1) => {
    let output = React.Component;
    switch(instruction){
        case (-1):
          return
        case AssemblyLineInstruction.ALU:
            setOutput(<>
              <span key="tag">R</span>
              <Input onInstructionChange={onItemClick}/>
              <span key="tag">←</span>
              <span key="tag">R</span>
              <Input onInstructionChange={onItemClick}/>
              <span key="tag">R</span>
              <Input onInstructionChange={onItemClick}/>
            </>);
          return;
        case AssemblyLineInstruction.ALUi:
          setOutput(<>
              <span key="tag">R</span>
              <Input onInstructionChange={onItemClick}/>
              <span key="tag">←</span>
              <span key="tag">R</span>
              <Input onInstructionChange={onItemClick}/>
              <span key="tag">Imm</span>
              <Input onInstructionChange={onItemClick}/>
            </>);
          return;
        case AssemblyLineInstruction.COND:
          setOutput(<>
            <span key="tag">IF (R</span>
            <Input onInstructionChange={onItemClick}/>
            <span key="tag">!= 0) THEN GOTO</span>
            <Input onInstructionChange={onItemClick}/>
            </>)
          return;
        case AssemblyLineInstruction.JUMP:
          setOutput(<>
              <span key="tag">JUMP</span>
              <Input onInstructionChange={onItemClick}/>
            </>);
            return;
        case AssemblyLineInstruction.LABEL:
          setOutput(<>
              <span key="tag">LABEL</span>
              <Input onInstructionChange={onItemClick}/>
            </>);
          return;
        case AssemblyLineInstruction.LOAD:
          setOutput(<>
              <span key="tag">R</span>
              <Input onInstructionChange={onItemClick}/>
              <span key="tag">←</span>
              <span key="tag">Mem</span>
              <Input onInstructionChange={onItemClick}/>
              <span key="tag">Offset</span>
              <Input onInstructionChange={onItemClick}/>
            </>);
          return;
        case AssemblyLineInstruction.STORE:
          setOutput(<>
              <span key="tag">Mem</span>
              <Input onInstructionChange={onItemClick}/>
              <span key="tag">Offset</span>
              <span key="tag">←</span>
              <span key="tag">R</span>
              <Input onInstructionChange={onItemClick}/>
            </>);
          return;
    }
};

  // Variable and setter value
  const [showMenu, setShowMenu] = useState(false);    // --> Menu is false
  const [selectedInstruction, setSelectedInstruction] = useState<AssemblyLineInstruction | -1>(-1);   // --> selectedInstruction is -1

  // Run once when the component is mounted
  useEffect(() => {
    const handler = () => setShowMenu(false);         // --> showMenu = false
    window.addEventListener("click", handler);        // --> click event
    return () => {                                    // --> cleanup function
      window.removeEventListener("click", handler);
    };
  }, []);

  // When input element is clicked, set showMenu to it's opposite
  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  // Display the instruction 
  const getDisplay = () => {
    if (selectedInstruction !== -1) {
      return AssemblyLineLabels.get(selectedInstruction);
    } else {
      return placeHolder;
    }
  };

  // Select instruction
  const onItemClick = (instruction: AssemblyLineInstruction | -1) => {
    setSelectedInstruction(instruction);
    renderInputs(instruction)
  };

  // Keep selected instructionS
  const isSelected = (instruction: AssemblyLineInstruction) => {
    return selectedInstruction === instruction
  };
  
  return (
    <div className="im-container">
      <div onClick={handleInputClick} className="im-input">
        <div className="im-selected-value">{getDisplay()}</div>
        <div className="im-tools"></div>
      </div>
      {showMenu && (
        <div className="im-menu">
          {Array.from(AssemblyLineLabels, ([instruction, label]) => (
            <div
              onClick={() => onItemClick(instruction)}
              key={instruction}
              className={`im-item ${isSelected(instruction) ? "selected" : ""}`}
            >
              {label}
            </div>
          ))}
        </div>
      )}
      <div className="Inputs">{output}</div>
    </div>
  );
};