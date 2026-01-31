import React from "react";
import "./Styles.css";

export const RadioGroup = ({selected,onChange, children}) => {
    
    const RadioOptions = React.Children.map(children,(child)=>{
       return React.cloneElement(child,{
            onChange,
            checked: child.props.value === selected
        });
    })

    return <div className="RadioGroup"> {RadioOptions} </div>
}

export const RadioOption = ({ value, checked,onChange, children }) => {

   

    return(
        <div className="RadioOption">
            <input id={value} type="radio" name={value} checked={checked} onChange={(e) => {
                onChange(e.target.value)
            }} />
            <label htmlFor= {value}>{children}</label>
        </div>
    )
}