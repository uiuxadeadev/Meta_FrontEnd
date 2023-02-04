// ref https://www.coursera.org/learn/advanced-react/supplement/YbOdd/solution-build-a-radio-group-component

import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => {
    // console.log("onChange", onChange);
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  //   console.log("value", value);
  //   console.log("checked", checked);
  //   console.log("onChange", onChange);
  //   console.log("children", children);
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        // use the onChange event from the radio input,
        // retrieve the value property from the event target object
        // and pass it to the onChange prop as the argument
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
