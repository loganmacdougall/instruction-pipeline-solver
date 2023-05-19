import React, { useEffect, useState } from "react";
import "./instruction_menu.css";

export interface Option {
  value: string;
  label: string;
}

interface InstructionMenuProps {
  placeHolder?: string;
  options: Option[];
}

export const InstructionMenu: React.FC<InstructionMenuProps> = ({
  placeHolder,
  options,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
  };

  const onItemClick = (option: Option) => {
    setSelectedValue(option);
  };

  const isSelected = (option: Option) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  return (
    <div className="im-container">
      <div onClick={handleInputClick} className="im-input">
        <div className="im-selected-value">{getDisplay()}</div>
        <div className="im-tools"></div>
      </div>
      {showMenu && (
        <div className="im-menu">
          {options.map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`im-item ${isSelected(option) ? "selected" : ""}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};