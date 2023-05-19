import React, {useState} from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    onInputChange: (value: string) => void;
}



export const Input: React.FC<InputProps> = ({ label, onInputChange, ...rest }) => {
    const [value, setValue] = useState(label);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        onInputChange(newValue); // Notify parent component of the value change
      };

    return(
        <div className="input-wrapper">
            <label>{label}</label>
            <input></input>
        </div>
    )
};
