import React, { useEffect, useState } from "react";
import "./instruction_menu.css";
import {AssemblyLineInstruction, AssemblyLineLabels} from "../../classes/instruction/AssemblyLineInstruction" 
import {Instruction} from '../Instruction'

// Expecting Props 
interface InstructionMenuProps {
  placeHolder?: string;
  onInstructionChange: (instruction: AssemblyLineInstruction) => void;
}

// Exporting Components
export const InstructionMenu: React.FC<InstructionMenuProps> = ({
  placeHolder,
}) => {

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
    </div>
  );
};