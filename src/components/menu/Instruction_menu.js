import React, { useEffect, useState } from "react";
import "./instruction_menu.css"

export const options = [
    {value: "add", label : "ADD"},
    {value: "dadd", label : "DADD"},
    {value: "daddi", label : "DADDI"},
    {value: "daddui", label : "DADDUI"},
    {value: "and", label : "AND"},
    {value: "or", label : "OR"}
  ];

export const Instruction_menu = ({ placeHolder, options }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    useEffect(() =>{
        const handler = () => setShowMenu(false);

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }
    const getDisplay = () =>{
        if(selectedValue){
            return selectedValue.label;
        }
    };

    const onItemClick = (option) => {
        setSelectedValue(option);
    }

    const isSelected = (option) => {
        if(!selectedValue){
            return false;
        }

        return selectedValue.value == option.value;
    };

    return(
        <div className="im-container">
            <div onClick = {handleInputClick} className="im-input">
                <div className="im-selected-value">
                    {getDisplay()}
                </div>
                <div className="im-tools">
                </div>
            </div>
            {showMenu && (
                <div className="im-menu">
                    {options.map((option) =>(
                        <div onClick= {() => onItemClick(option)} key={option.value} className={`"im-item" ${isSelected(option) && "selected"}`}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}